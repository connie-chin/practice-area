select count(*) as "cityCount",
      "countries"."name" as "country"
      from "cities"
      join "countries" using ("countryId")
      group by "countries"."name";
