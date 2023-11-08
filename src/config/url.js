class URL {
  static api() {
    let env = process.env.REACT_APP_ENV;

    if (env === "dev") {
      return "http://localhost:1337";
    } else if (env === "uat") {
      return "http://nadescrib.com:1337";
    } else if (env === "prod") {
      return "/";
    }

    return "/";
  }
}

export default URL;
