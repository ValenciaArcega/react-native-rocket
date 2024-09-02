export const REG_LETTERS: RegExp = /[a-zA-Z]/

export const REG_INPUT: RegExp = /^(?!.*([A-ZÁÉÍÓÚÑ])[a-záéíóúñ]+\1)[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,14}(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,14})?$/

export const REG_PHONE: RegExp = /^(?:\+?52)?[1-9]\d{9}$/

export const REG_NUMBERS: RegExp = /[0-9]/

export const REG_SYMBOLS: RegExp = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/

export const REG_REFERENCE: RegExp = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|<>\/¿?]/

export const REG_SYMBOLS_EXCEPT_DOT: RegExp = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/¿?]/

export const REG_RFC: RegExp = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/

export const REG_RFC_MORAL: RegExp = /[A-Z]{3}[0-9]{6}[A-Z0-9]{3}/

export const REG_RFC_FISICA: RegExp = /[A-Z]{4}[0-9]{6}[A-Z0-9]{3}/

export const REG_EMAIL: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const REG_PASSWORD_STRONG: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?_])[A-Za-z\d@$!%*#?_]{8,}$/;

export const REG_CURP: RegExp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
