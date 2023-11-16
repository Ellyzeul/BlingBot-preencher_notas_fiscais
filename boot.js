import { configDotenv } from "dotenv";
import { Builder, Browser } from "selenium-webdriver";

configDotenv({ path: './config.txt' })

const boot = async() => {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build()
}

export default boot
