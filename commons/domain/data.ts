import { Config, FetchOptions } from "imap";
import * as Imap from "imap-simple";
import { getRequiredEnvVar } from "../utils/environment";

const config: Config = {
  user: getRequiredEnvVar("IMAP_MAIL"),
  // tslint:disable-next-line: object-literal-sort-keys
  password: getRequiredEnvVar("IMAP_PASSWORD"),
  host: getRequiredEnvVar("IMAP_HOST"),
  port: Number(getRequiredEnvVar("IMAP_PORT")),
  tls: true,
  authTimeout: 3000
};

export const imapOption: Imap.ImapSimpleOptions = {
  imap: config,
  // tslint:disable-next-line: no-console
  onmail: (num: number) => console.log(num.toString)
};

// tslint:disable-next-line: readonly-array
export const searchCriteria: string[] = ["UNSEEN"];

export const fetchOptions: FetchOptions = {
  bodies: ["HEADER", "TEXT"],
  //markSeen: false,
  markSeen: true,
  struct: true
};

export const urlDemoAruba: string =
  "https://vol.demo.firma-automatica.it/actalisVol/services/VerificationServiceSOAP?wsdl";
