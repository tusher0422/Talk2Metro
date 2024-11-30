import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: FirebaseOptions(
            apiKey: "AIzaSyBrnzWLnBHaHUUExI-v2rVyuDr-XP2qwIQ",
            authDomain: "talktometro-abdc6.firebaseapp.com",
            projectId: "talktometro-abdc6",
            storageBucket: "talktometro-abdc6.firebasestorage.app",
            messagingSenderId: "525796885243",
            appId: "1:525796885243:web:03592bab5af75354d2a65e"));
  } else {
    await Firebase.initializeApp();
  }
}
