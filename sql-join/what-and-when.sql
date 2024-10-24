select "films"."releaseYear" as "releaseYear",
        "genres"."name" as "genre"
      from "films"
      join "filmGenre" using ("filmId")
      join "genres" using ("genreId")
      where "film"."title" = 'Boogie Amelie';
