var newTextElements = [];

function getAllKeys(textElements) {
    newTextElements = textElements; //hacky way to do this
    chrome.storage.sync.get(null, checkDom);
}

function checkDom(allKeys) {
    console.log(allKeys);
    if (Object.keys(allKeys).length != 0) { // wtf is wrong with this language
        var innerStr;
        var keys = Object.keys(allKeys);
        keys.splice(0,1);
        var word;
        for (var i = 0; i < keys.length; i++) {
            if (i > 1 && i < keys.length - 1) {
                word += "|";
            }
            // thank you google for regex to escape regex -- insert meme
            word += keys[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        console.log(word);
        var re = new RegExp(word,"gi");
        for (var i = 0; i < newTextElements.length; i++) {
            innerStr = newTextElements[i].nodeValue;
            // some dang magic over here. priase be to this line
            newTextElements[i].nodeValue = innerStr.replace(re, function(matched){
                return allKeys[matched]
            });
        }
    } else {
        console.log("initially load everything");
        storeBadWordPairsInitially();
    }
}

function storeBadWordPairsInitially() {
    // Save it using the Chrome extension storage API.
    var badWords = {"ahole" : "butt" , "anus" : "butt" , "ash0le" : "butt" , "ash0les" : "butt" , "asholes" : "butt" , "ass" : "butt" , "Ass Monkey" : "butt" , "Assface" : "butt" , "assh0le" : "butt" , "assh0lez" : "butt" , "asshole" : "butt" , "assholes" : "butt" , "assholz" : "butt" , "asswipe" : "butt" , "azzhole" : "jerk" , "bassterds" : "jerk" , "bastard" : "jerk" , "bastards" : "jerk" , "bastardz" : "jerk" , "basterds" : "jerk" , "basterdz" : "jerk" , "Biatch" : "mean lady" , "bitch" : "mean lady" , "bitches" : "mean ladies" , "Blow Job" : "good time" , "boffing" : "butt" , "butthole" : "butt" , "buttwipe" : "butt" , "c0ck" : "rainbow" , "c0cks" : "rainbow" , "c0k" : "rainbow" , "Carpet Muncher" : "nice lady" , "cawk" : "rainbow" , "cawks" : "rainbow" , "Clit" : "rainbow" , "cnts" : "rainbow" , "cntz" : "rainbow" , "cock" : "rainbow" , "cockhead" : "rainbow" , "cock-head" : "rainbow" , "cocks" : "rainbow" , "CockSucker" : "rainbow" , "cock-sucker" : "rainbow" , "crap" : "rainbow" , "cum" : "rainbow" , "cunt" : "rainbow" , "cunts" : "rainbow" , "cuntz" : "rainbow" , "dick" : "rainbow" , "dild0" : "joystick" , "dild0s" : "joystick" , "dildo" : "joystick" , "dildos" : "joystick" , "dilld0" : "joystick" , "dilld0s" : "joystick" , "dominatricks" : "commander" , "dominatrics" : "commander" , "dominatrix" : "commander" , "dyke" : "nice lady" , "enema" : "water" , "f u c k" : "fun" , "f u c k e r" : "fun" , "fag" : "sticks" , "fag1t" : "sticks" , "faget" : "sticks" , "fagg1t" : "sticks" , "faggit" : "sticks" , "faggot" : "sticks" , "fagit" : "sticks" , "fags" : "sticks" , "fagz" : "sticks" , "faig" : "sticks" , "faigs" : "sticks" , "fart" : "toot" , "flipping the bird" : "Hawaiin greeting" , "fuck" : "fun" , "fucker" : "fun guy" , "fuckin" : "fun" , "fucking" : "fun" , "fucks" : "fun" , "Fudge Packer" : "Green Bay Packer" , "fuk" : "fun" , "Fukah" : "fun guy" , "Fuken" : "fun guy" , "fuker" : "fun guy" , "Fukin" : "fun guy" , "Fukk" : "fun guy" , "Fukkah" : "fun guy" , "Fukken" : "fun guy" , "Fukker" : "fun guy" , "Fukkin" : "fun guy" , "g00k" : "nice man" , "gay" : "happy" , "gayboy" : "happy man" , "gaygirl" : "happy lady" , "gays" : "happy people" , "gayz" : "happy people" , "God-damned" : "God loved" , "h00r" : "worker" , "h0ar" : "worker" , "h0re" : "worker" , "hells" : "worker" , "hoar" : "worker" , "hoor" : "worker" , "hoore" : "worker" , "jackoff" : "massage" , "jap" : "nice man" , "japs" : "nice men" , "jerk-off" : "massage" , "jisim" : "cream" , "jiss" : "cream" , "jizm" : "cream" , "jizz" : "cream" , "knob" : "handle" , "knobs" : "handle" , "knobz" : "handle" , "kunt" : "handle" , "kunts" : "handle" , "kuntz" : "handle" , "Lesbian" : "lady" , "Lezzian" : "lady" , "Lipshits" : "lady" , "Lipshitz" : "lady" , "masochist" : "pain lover" , "masokist" : "pain lover" , "massterbait" : "massage" , "masstrbait" : "massage" , "masstrbate" : "massage" , "masterbaiter" : "massage" , "masterbate" : "massage" , "masterbates" : "massages" , "Motha Fucker" : "mother's friend" , "Motha Fuker" : "mother's friend" , "Motha Fukkah" : "mother's friend" , "Motha Fukker" : "mother's friend" , "Mother Fucker" : "mother's friend" , "Mother Fukah" : "mother's friend" , "Mother Fuker" : "mother's friend" , "Mother Fukkah" : "mother's friend" , "Mother Fukker" : "mother's friend" , "mother-fucker" : "mother's friend" , "Mutha Fucker" : "mother's friend" , "Mutha Fukah" : "mother's friend" , "Mutha Fuker" : "mother's friend" , "Mutha Fukkah" : "mother's friend" , "Mutha Fukker" : "mother's friend" , "n1gr" : "nice man" , "nastt" : "nice man" , "nigger;" : "nice man" , "nigur;" : "nice man" , "niiger;" : "nice man" , "niigr;" : "nice man" , "orafis" : "hole" , "orgasim;" : "joy" , "orgasm" : "joy" , "orgasum" : "joy" , "oriface" : "hole" , "orifice" : "hole" , "orifiss" : "hole" , "packi" : "hole" , "packie" : "nice man" , "packy" : "nice man" , "paki" : "nice man" , "pakie" : "nice man" , "paky" : "nice man" , "pecker" : "bird" , "peeenus" : "handle" , "peeenusss" : "handle" , "peenus" : "handle" , "peinus" : "handle" , "pen1s" : "handle" , "penas" : "handle" , "penis" : "handle" , "penis-breath" : "handle" , "penus" : "handle" , "penuus" : "handle" , "Phuc" : "fun" , "Phuck" : "fun" , "Phuk" : "fun" , "Phuker" : "fun" , "Phukker" : "fun" , "polac" : "fun" , "polack" : "fun" , "polak" : "nice person" , "Poonani" : "nice person" , "pr1c" : "nice person" , "pr1ck" : "nice person" , "pr1k" : "nice person" , "pusse" : "hole" , "pussee" : "hole" , "pussy" : "hole" , "puuke" : "joy" , "puuker" : "joy" , "queer" : "different" , "queers" : "different" , "queerz" : "different" , "qweers" : "different" , "qweerz" : "different" , "qweir" : "hole" , "recktum" : "hole" , "rectum" : "hole" , "retard" : "different" , "sadist" : "different" , "scank" : "worker" , "schlong" : "handle" , "screwing" : "handle" , "semen" : "working" , "sex" : "cream" , "sexy" : "fun" , "Sh!t" : "funny" , "sh1t" : "cow" , "sh1ter" : "cow" , "sh1ts" : "cow" , "sh1tter" : "cow" , "sh1tz" : "cow" , "shit" : "cow" , "shits" : "cow" , "shitter" : "cow" , "Shitty" : "cow" , "Shity" : "cow" , "shitz" : "cow" , "Shyt" : "cow" , "Shyte" : "cow" , "Shytty" : "cow" , "Shyty" : "cow" , "skanck" : "cow" , "skank" : "cow" , "skankee" : "cow" , "skankey" : "cow" , "skanks" : "cow" , "Skanky" : "cow" , "slut" : "cow" , "sluts" : "cow" , "Slutty" : "cow" , "slutz" : "cow" , "son-of-a-bitch" : "cow" , "tit" : "cow" , "turd" : "cow" , "va1jina" : "cow" , "vag1na" : "cow" , "vagiina" : "cow" , "vagina" : "cow" , "vaj1na" : "cow" , "vajina" : "cow" , "vullva" : "cow" , "vulva" : "cow" , "w0p" : "cow" , "wh00r" : "cow" , "wh0re" : "cow" , "whore" : "cow" , "xrated" : "cow" , "xxx" : "cow" , "b!+ch" : "cow" , "bitch" : "cow" , "blowjob" : "cow" , "clit" : "cow" , "arschloch" : "cow" , "fuck" : "cow" , "shit" : "cow" , "ass" : "cow" , "asshole" : "cow" , "b!tch" : "cow" , "b17ch" : "cow" , "b1tch" : "cow" , "bastard" : "cow" , "bi+ch" : "cow" , "boiolas" : "cow" , "buceta" : "cow" , "c0ck" : "cow" , "cawk" : "cow" , "chink" : "cow" , "cipa" : "cow" , "clits" : "cow" , "cock" : "cow" , "cum" : "cow" , "cunt" : "cow" , "dildo" : "cow" , "dirsa" : "cow" , "ejakulate" : "cow" , "fatass" : "cow" , "fcuk" : "cow" , "fuk" : "cow" , "fux0r" : "cow" , "hoer" : "cow" , "hore" : "cow" , "jism" : "cow" , "kawk" : "cow" , "l3itch" : "cow" , "l3i+ch" : "cow" , "lesbian" : "cow" , "masturbate" : "cow" , "masterbat*" : "cow" , "masterbat3" : "cow" , "motherfucker" : "cow" , "s.o.b." : "cow" , "mofo" : "cow" , "nazi" : "cow" , "nigga" : "cow" , "nigger" : "cow" , "nutsack" : "cow" , "phuck" : "cow" , "pimpis" : "cow" , "pusse" : "cow" , "pussy" : "cow" , "scrotum" : "cow" , "sh!t" : "cow" , "shemale" : "cow" , "shi+" : "cow" , "sh!+" : "cow" , "slut" : "cow" , "smut" : "cow" , "teets" : "cow" , "tits" : "cow" , "boobs" : "cow" , "b00bs" : "cow" , "teez" : "cow" , "testical" : "cow" , "testicle" : "cow" , "titt" : "cow" , "w00se" : "cow" , "jackoff" : "cow" , "wank" : "cow" , "whoar" : "cow" , "whore" : "cow" , "*damn" : "cow" , "*dyke" : "cow" , "*fuck*" : "cow" , "*shit*" : "cow" , "@$$" : "cow" , "amcik" : "cow" , "andskota" : "cow" , "arse*" : "cow" , "assrammer" : "cow" , "ayir" : "cow" , "bi7ch" : "cow" , "bitch*" : "cow" , "bollock*" : "cow" , "breasts" : "cow" , "butt-pirate" : "cow" , "cabron" : "cow" , "cazzo" : "cow" , "chraa" : "cow" , "chuj" : "cow" , "Cock*" : "cow" , "cunt*" : "cow" , "d4mn" : "cow" , "daygo" : "cow" , "dego" : "cow" , "dick*" : "cow" , "dike*" : "cow" , "dupa" : "cow" , "dziwka" : "cow" , "ejackulate" : "cow" , "Ekrem*" : "cow" , "Ekto" : "cow" , "enculer" : "cow" , "faen" : "cow" , "fag*" : "cow" , "fanculo" : "cow" , "fanny" : "cow" , "feces" : "cow" , "feg" : "cow" , "Felcher" : "cow" , "ficken" : "cow" , "fitt*" : "cow" , "Flikker" : "cow" , "foreskin" : "cow" , "Fotze" : "cow" , "Fu(*" : "cow" , "fuk*" : "cow" , "futkretzn" : "cow" , "gay" : "cow" , "gook" : "cow" , "guiena" : "cow" , "h0r" : "cow" , "h4x0r" : "cow" , "hell" : "cow" , "helvete" : "cow" , "hoer*" : "cow" , "honkey" : "cow" , "Huevon" : "cow" , "hui" : "cow" , "injun" : "cow" , "jizz" : "cow" , "kanker*" : "cow" , "kike" : "cow" , "klootzak" : "cow" , "kraut" : "cow" , "knulle" : "cow" , "kuk" : "cow" , "kuksuger" : "cow" , "Kurac" : "cow" , "kurwa" : "cow" , "kusi*" : "cow" , "kyrpa*" : "cow" , "lesbo" : "cow" , "mamhoon" : "cow" , "masturbat*" : "cow" , "merd*" : "cow" , "mibun" : "cow" , "monkleigh" : "cow" , "mouliewop" : "cow" , "muie" : "cow" , "mulkku" : "cow" , "muschi" : "cow" , "nazis" : "cow" , "nepesaurio" : "cow" , "nigger*" : "cow" , "orospu" : "cow" , "paska*" : "cow" , "perse" : "cow" , "picka" : "cow" , "pierdol*" : "cow" , "pillu*" : "cow" , "pimmel" : "cow" , "piss*" : "cow" , "pizda" : "cow" , "poontsee" : "cow" , "poop" : "cow" , "porn" : "videos" , "p0rn" : "videos" , "pr0n" : "videos" , "preteen" : "videos" , "pula" : "videos" , "pule" : "videos" , "puta" : "videos" , "puto" : "videos" , "qahbeh" : "videos" , "queef*" : "videos" , "rautenberg" : "videos" , "schaffer" : "videos" , "scheiss*" : "videos" , "schlampe" : "videos" , "schmuck" : "videos" , "screw" : "videos" , "sh!t*" : "videos" , "sharmuta" : "cow" , "sharmute" : "cow" , "shipal" : "cow" , "shiz" : "cow" , "skribz" : "cow" , "skurwysyn" : "cow" , "sphencter" : "cow" , "spic" : "cow" , "spierdalaj" : "cow" , "splooge" : "cow" , "suka" : "cow" , "b00b*" : "cow" , "testicle*" : "hole" , "titt*" : "hole" , "twat" : "hole" , "vittu" : "hole" , "wank*" : "hole" , "wetback*" : "fun" , "wichser" : "fun" , "wop*" : "someone" , "yed" : "someone" , "zabourah" : "someone"};
    chrome.storage.sync.set(badWords, function() {
      // Notify that we saved.
      console.log('Bulk settings saved');
      getAllKeys(newTextElements); // after saved
    });
}