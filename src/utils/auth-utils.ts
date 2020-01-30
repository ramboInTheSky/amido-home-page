import { UserAgentApplication } from 'msal'

export const isDev = process.env.NODE_ENV === 'development'

export const requiresInteraction = (errorMessage: any) => {
  if (!errorMessage || !errorMessage.length) {
    return false
  }

  return (
    errorMessage.indexOf('consent_required') > -1 ||
    errorMessage.indexOf('interaction_required') > -1 ||
    errorMessage.indexOf('login_required') > -1
  )
}

export const fetchMsGraph = async (url: string, accessToken: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response.json()
}

export const isIE = () => {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf('MSIE ') > -1
  const msie11 = ua.indexOf('Trident/') > -1

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11
}

export const GRAPH_SCOPES = {
  OPENID: 'openid',
  PROFILE: 'profile',
  USER_READ: 'User.Read',
  MAIL_READ: 'Mail.Read',
}

export const GRAPH_ENDPOINTS = {
  ME: 'https://graph.microsoft.com/v1.0/me',
  MAIL: 'https://graph.microsoft.com/v1.0/me/messages',
}

export const GRAPH_REQUESTS = {
  LOGIN: {
    scopes: [GRAPH_SCOPES.OPENID, GRAPH_SCOPES.PROFILE, GRAPH_SCOPES.USER_READ],
  },
  EMAIL: {
    scopes: [GRAPH_SCOPES.MAIL_READ],
  },
}

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: 'f7216bce-7932-4445-aafb-c713e660d3b5',
    // authority: 'https://login.microsoftonline.com/f88c76e1-2e79-4cd5-8b37-842f3f870d58',
    authority: 'https://login.microsoftonline.com/common',
    validateAuthority: true,
    postLogoutRedirectUri: isDev ? 'https://localhost:3000' : 'https://amido.netlify.com',
    redirectUri: isDev ? 'https://localhost:3000' : 'https://amido.netlify.com',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: isIE(),
  },
  system: {
    navigateFrameWait: 0,
    logger: {
      error: console.error,
      errorPii: console.error,
      info: console.log,
      infoPii: console.log,
      verbose: console.log,
      verbosePii: console.log,
      warning: console.warn,
      warningPii: console.warn,
    } as any,
  },
})
