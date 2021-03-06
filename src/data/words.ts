import _ from "lodash"

const PROGRAMING_LANG: string[] = [
  "agda",
  "basic",
  "brainfuck",
  "c",
  "clojure",
  "crystal",
  "csharp",
  "css",
  "dart",
  "delphi",
  "elixir",
  "elm",
  "erlang",
  "fortran",
  "golang",
  "groovy",
  "haskell",
  "html",
  "idris",
  "java",
  "javascript",
  "kotlin",
  "lisp",
  "lua",
  "matlab",
  "mercury",
  "mint",
  "myrddin",
  "nim",
  "objectivec",
  "ocaml",
  "pascal",
  "perl",
  "php",
  "prolog",
  "purescript",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "scheme",
  "sql",
  "swift",
  "typescript",
  "vimscript",
  "zig",
]

export const getRandomWord = (): string => {
  return PROGRAMING_LANG[_.random(PROGRAMING_LANG.length - 1)]
}
