using extension auth;

module default {
  global current_user := (
    assert_single((
      select User { id, username, email }
      filter .identity = global ext::auth::ClientTokenIdentity
    ))
  );

  abstract type Timestamped {
    created: datetime {
      rewrite insert using (datetime_of_statement());
    }
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    }
  }

  type User extending Timestamped {
    required identity: ext::auth::Identity;
    required username: str;
    required email: str;
  }

  type Project extending Timestamped {
    required name: str;
    required created_by: User {
      default := global current_user;
    }

    required description: str;
    required yt_video_id: str;
    required github_repo: str {
      constraint exclusive;
    };
    required website_link: str;
    tags: array<str>;

    multi other_team_members: User;

    required creators := {.created_by, .other_team_members};

    access policy creators_has_full_access
      allow all
      using ((global current_user in .creators) ?? false);
    access policy others_read_only
      allow select;
  }
}