const STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
  
    // Client Errors
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
  
    //Event/File Specific
    FILE_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
  
    // Server Errors
    INTERNAL_SERVER_ERROR: 500,
  };
  
  export default STATUS_CODES;
  