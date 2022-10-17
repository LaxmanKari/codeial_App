

const development = {
    name: 'development',
    asset_path: './assests',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail', 
        host: 'smtp.gmail.com',
        port: 587, 
        secure: false,
        auth: {
            user: 'laxmankari27@gmail.com',
            pass: 'vbvvvtisejqhriyh'
        }
    },
    google_client_id: "776754963404-lov9itkbthm7de1b8up3q3cech9q1amv.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial'
}

const production = {
    name: 'production',
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: 'JJWBSh3Fk0rAffpoxyCITyPIZwG3HLZo',
    db: 'codeial_production',
    smtp: {
        service: 'gmail', 
        host: 'smtp.gmail.com',
        port: 587, 
        secure: false,
        auth: {
            user: 'laxmankari27@gmail.com',
            pass: 'vbvvvtisejqhriyh'
        }
    },
    google_client_id: "776754963404-lov9itkbthm7de1b8up3q3cech9q1amv.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://codeial.com/users/auth/google/callback",
    jwt_secret: 'gOLrDQEqIJ0JONwz6roZbfWmrxqmmTbl'
}



module.exports = development; 