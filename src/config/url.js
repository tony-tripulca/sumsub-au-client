class URL {
  static api() {
    let env = process.env.APP_ENV;

    /** Change the links respective to environments */
    if (env === "dev") {
      return "https://9b4c-112-198-208-1.ngrok-free.app";
    } else if (env === "uat") {
      return "https://9b4c-112-198-208-1.ngrok-free.app";
    } else if (env === "prod") {
      return "https://9b4c-112-198-208-1.ngrok-free.app";
    }

    return "https://9b4c-112-198-208-1.ngrok-free.app";
  }
}

export default URL;
