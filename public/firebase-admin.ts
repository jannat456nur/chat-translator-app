

let app;

if(!admin.apps.length){
    app = admin.initializeApp({
        crediential:admin.credential.cert({
            projectId:process.env.FIREBASE_PROJECT_ID,
            clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
            privateKey:process.env.FIREBASE_PRIVATE_KEY,
        }),
    });
}

const admindb = initFirestore({
    credential:admin.credential.cert({
        projectId:process.env.FIREBASE_PROJECT_ID,
        clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
        privateKey:process.env.FIREBASE_PRIVATE_KEY,

    }),
});

const adminAuth = admin.auth(app);

export {adminDb,adminAuth};