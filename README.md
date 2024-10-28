
How to use ApiSignatureService:

const ApiSignatureService = require('@catchcorner/cc-api-signature');
const signature = new ApiSignatureService().getApiSignature();
console.log(signature);


How to use StringSanitizerService:

const StringSanitizerService = require('@catchcorner/cc-strig-sanitizer');
const sanitizedName = new StringSanitizerService().sanitizeNeighbourhoodName('Neighbourhood &Name   ');
console.log(sanitizedName);