"use strict";

export default defineEventHandler((event) => {
  console.log(event.req.statusCode)
  console.log("ログイン");
  return JSON.stringify({
    message: "ログイン終わった",
  })
})