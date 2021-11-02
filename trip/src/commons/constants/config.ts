import Setting from "./setting";

type ConfigType = {
    auth: string;
    graphqlEndpoint: string;
    graphqlBaseUrl: string;
    graph: string;
    googleClientId?: string;
    tms_app: string;
    DOMAIN_APP?: string;
};

export const Config: ConfigType | any = {
    auth: Setting.VITE_AUTHENTICATION_KEY || "",
    tms_app: Setting.TMS_APP || "",
    graphqlEndpoint: Setting.VITE_GQL_ENDPOINT || "",
    graphqlBaseUrl: Setting.VITE_GQL_BASE_URL || "",
    graph: Setting.VITE_GQL_PATH || "",
    googleClientId: "",
    DOMAIN_APP: Setting.DOMAIN_APP || "localhost",
};
