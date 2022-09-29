interface InterfaceReponse {
  data?: any,
  error?: { statusCode?: number, message?: string };
};

export function apiResponse(data: any, statusCode?: number, message?: string): InterfaceReponse {
  if (data === null) {
    return {
      error: {
        statusCode: statusCode,
        message: message
      }
    }
  } else {
    return {
      data: data
    }
  }
};
