Route.resource("users", "UserController")
  .only("update")
  .middleware(new Map([[["update", "boundRouteModel:App/Model/User,user"]]]))
