class ApiSignatureService {
    #sessionId = '';
        
    getApiSignature() {
        const {v4} = require('uuid');
        
        if (this.#sessionId === '')
            this.#sessionId = v4().toString();
        
        let timestamp = new Date().getTime().toString();
        let signature = `${this.#sessionId}=${timestamp}=`;

        for (let i = 0; i < 16; i++) {
            const noiseString = (Math.random() + 1).toString(10).substring(16);
            signature += `${noiseString}`
        }
        
        return signature;
    }
}

class StringSanitizerService {
	sanitizeNeighbourhoodName(input) {
		return input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	}
}

module.exports = {
    ApiSignatureService,
    StringSanitizerService
}
