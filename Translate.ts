import { Menu, Utils } from "wrapper/Imports"

const base = "github.com/octarine-public/auto-five/scripts_files"
const Load = (name: string) => {
	return new Map<string, string>
		(Object.entries(Utils.readJSON(`${base}/${name}.json`)))
}
Menu.Localization.AddLocalizationUnit("russian", Load("ru"))
Menu.Localization.AddLocalizationUnit("english", Load("en"))
Menu.Localization.AddLocalizationUnit("сhinese", Load("cn"))
