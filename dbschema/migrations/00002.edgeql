CREATE MIGRATION m1umi7mq36qdjnut45bqm6whxt5letzdbclqdo4it5bu7xckctwaaq
    ONTO m1gejt3jtdbq4ixv25ocfklxo55gvsbtyhdkr2hyrbcis3jeo4osrq
{
  CREATE TYPE default::User {
      CREATE REQUIRED LINK identity: ext::auth::Identity;
      CREATE PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY username: std::str;
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
  CREATE GLOBAL default::current_user := (std::assert_single((SELECT
      default::User {
          id,
          username,
          email
      }
  FILTER
      (.identity = GLOBAL ext::auth::ClientTokenIdentity)
  )));
  CREATE TYPE default::Project {
      CREATE REQUIRED MULTI LINK creators: default::User {
          SET default := {GLOBAL default::current_user};
      };
      CREATE ACCESS POLICY creators_has_full_access
          ALLOW ALL USING (((GLOBAL default::current_user IN .creators) ?? false));
      CREATE REQUIRED LINK created_by: default::User {
          SET default := (GLOBAL default::current_user);
      };
      CREATE ACCESS POLICY others_read_only
          ALLOW SELECT ;
      CREATE PROPERTY created: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY github_link: std::str;
      CREATE REQUIRED PROPERTY image_link: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY tags: array<std::str>;
      CREATE PROPERTY updated: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY website_link: std::str;
      CREATE REQUIRED PROPERTY yt_link: std::str;
  };
};
