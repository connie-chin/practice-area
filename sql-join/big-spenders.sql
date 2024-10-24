select "payments"."amount" as "amount",
        "customers"."firstName" as "firstName",
        "customers"."lastName" as "lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "amount" desc
  limit 10;
