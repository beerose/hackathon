using extension auth;

module default {
  global current_user := (
    assert_single((
      select User { id, username, email }
      filter .identity = global ext::auth::ClientTokenIdentity
    ))
  );

  type User {
    required identity: ext::auth::Identity;
    required username: str;
    email: str;
  
    created: datetime {
      rewrite insert using (datetime_of_statement());
    }
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    }
  }

  type Project {
    required name: str;
    required created_by: User {
      default := global current_user;
    }

    required description: str;
    required yt_link: str;
    required github_link: str;
    required website_link: str;
    required image_link: str;
    tags: array<str>;

    required multi creators: User {
      default := {global current_user};
    }

    created: datetime {
      rewrite insert using (datetime_of_statement());
    }
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    }

    access policy creators_has_full_access
      allow all
      using ((global current_user in .creators) ?? false);
    access policy others_read_only
      allow select;
  }
}