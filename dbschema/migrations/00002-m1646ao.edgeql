CREATE MIGRATION m1646aoiulwp6z7moecxcq4gkfpmvllr24mdquhlduqdb6xweb74qa
    ONTO m1i22zwmbyw5e24i7bxgl2op3x5lv5emnqnftl7o2peas4gcixmy5a
{
  ALTER TYPE default::Project {
      ALTER PROPERTY github_repo {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
