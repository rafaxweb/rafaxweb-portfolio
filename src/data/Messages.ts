export class Messages {
    
    constructor() {
    }

    static Introduction = class {
        public static title = new Map();
        public static subtitle = new Map(); 
        public static description = new Map();

        static {
            this.title.set("ES", "Hola, soy Rafael Salas");
            this.title.set("EN", "Hello, I'm Rafael Salas");

            this.subtitle.set("ES", "Desarrollador Full Stack");
            this.subtitle.set("EN", "Full Stack Developer");

            this.description.set("ES", "Programador web FullStack, con una constante motivación por aprender y afrontar nuevos retos. Me considero una persona curiosa y apasionada por la tecnología.");
            this.description.set("EN", "I am a FullStack web developer and a person with a constant motivation to learn and face new challenges. I consider myself a curious person and passionate about technology.");

        }
    }

    static Menu = class {
        public static home = new Map();
        public static projects = new Map();
        public static contact = new Map();

        static {
            this.home.set("ES", "Página principal");
            this.home.set("EN", "Home");

            this.projects.set("ES", "Proyectos");
            this.projects.set("EN", "Projects");

            this.contact.set("ES", "Contacto");
            this.contact.set("EN", "Contact");

        }
    }

    
}


