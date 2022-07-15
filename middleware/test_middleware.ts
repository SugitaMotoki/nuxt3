"use strict";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware");
})