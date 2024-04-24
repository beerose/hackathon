CREATE MIGRATION m1i22zwmbyw5e24i7bxgl2op3x5lv5emnqnftl7o2peas4gcixmy5a
    ONTO initial
{
  CREATE EXTENSION pgcrypto VERSION '1.3';
  CREATE EXTENSION auth VERSION '1.0';
  CREATE ABSTRACT TYPE default::Timestamped {
      CREATE PROPERTY created: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
      };
      CREATE PROPERTY updated: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
  };
  CREATE TYPE default::User EXTENDING default::Timestamped {
      CREATE REQUIRED LINK identity: ext::auth::Identity;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY username: std::str;
  };
  CREATE GLOBAL default::current_user := (std::assert_single((SELECT
      default::User {
          id,
          username,
          email
      }
  FILTER
      (.identity = GLOBAL ext::auth::ClientTokenIdentity)
  )));
  CREATE TYPE default::Project EXTENDING default::Timestamped {
      CREATE REQUIRED LINK created_by: default::User {
          SET default := (GLOBAL default::current_user);
      };
      CREATE MULTI LINK other_team_members: default::User;
      CREATE REQUIRED LINK creators := ({.created_by, .other_team_members});
      CREATE ACCESS POLICY creators_has_full_access
          ALLOW ALL USING (((GLOBAL default::current_user IN .creators) ?? false));
      CREATE ACCESS POLICY others_read_only
          ALLOW SELECT ;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY github_repo: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY tags: array<std::str>;
      CREATE REQUIRED PROPERTY website_link: std::str;
      CREATE REQUIRED PROPERTY yt_video_id: std::str;
  };
};
