import type { LocalizedText } from '@/types/content'

export type ProjectIcon = 'restaurant' | 'os' | 'automata'

export interface ProjectMetric {
  value: string
  label: LocalizedText
}

export interface ApiDemoStep {
  method: string
  path: string
  body?: string
  status: number
  response: string
}

export interface CompilerDemoStep {
  command: string
  output: string[]
}

export interface ArchitectureDiagramData {
  hub: { title: string; parts: string[] }
  nodes: { title: string; caption: LocalizedText }[]
  connectorLabel: LocalizedText
}

export interface ProjectDetails {
  problem: LocalizedText
  role: LocalizedText
  architecture: LocalizedText
  challenges: LocalizedText[]
  decisions: LocalizedText[]
  learnings: LocalizedText
  /** Pasos de una demo de terminal simulada (solo para proyectos backend sin UI). */
  apiDemo?: ApiDemoStep[]
  /** Pasos de una demo de consola/compilador (comando + líneas de salida). */
  compilerDemo?: CompilerDemoStep[]
  /** Diagrama de módulos (para sistemas distribuidos sin UI ni API única). */
  architectureDiagram?: ArchitectureDiagramData
}

export interface Project {
  id: string
  title: LocalizedText
  description: LocalizedText
  technologies: string[]
  icon: ProjectIcon
  metrics?: ProjectMetric[]
  details?: ProjectDetails
}

export const projects: Project[] = [
  {
    id: 'restaurant',
    title: {
      es: 'Sistema de Gestión para Restaurante',
      en: 'Restaurant Management System',
    },
    description: {
      es: 'Migración de un POS de escritorio (JavaFX/SQLite) a una API REST con Spring Boot y JPA, preservando toda la lógica de negocio original.',
      en: 'Migration of a desktop POS (JavaFX/SQLite) to a Spring Boot + JPA REST API, preserving all the original business logic.',
    },
    technologies: ['Java', 'Spring Boot', 'JPA / Hibernate', 'H2', 'JUnit 5', 'Mockito'],
    icon: 'restaurant',
    metrics: [
      { value: '39', label: { es: 'endpoints REST', en: 'REST endpoints' } },
      { value: '7', label: { es: 'entidades JPA', en: 'JPA entities' } },
      { value: '11', label: { es: 'tests unitarios', en: 'unit tests' } },
    ],
    details: {
      problem: {
        es: 'El restaurante gestionaba las comandas con una app de escritorio en JavaFX conectada directamente a SQLite: cualquier cambio de lógica implicaba tocar la interfaz y el acceso a datos al mismo tiempo, y no había forma de probarla de manera automática. La migré a una API REST para separar la lógica de negocio de la interfaz, permitir que cualquier cliente la consuma (web, mobile, otro sistema) y poder testearla de verdad.',
        en: "The restaurant managed orders with a JavaFX desktop app wired directly to SQLite: any logic change meant touching the UI and the data access at the same time, with no way to test it automatically. I migrated it to a REST API to separate business logic from the interface, let any client consume it (web, mobile, another system), and make it properly testable.",
      },
      role: {
        es: 'Diseñé e implementé toda la migración en solitario: modelado de entidades, lógica de negocio en la capa de servicios, controllers REST, manejo global de errores y la suite de tests.',
        en: 'I designed and implemented the entire migration solo: entity modeling, business logic in the service layer, REST controllers, global error handling, and the test suite.',
      },
      architecture: {
        es: 'Arquitectura en capas clásica — Controller → Service → Repository → Entity — con DTOs propios para validar cada request (@Valid) y una jerarquía de excepciones de negocio (PosException, RecursoNoEncontradoException) capturada por un @RestControllerAdvice central que siempre devuelve el mismo formato de error JSON.',
        en: 'Classic layered architecture — Controller → Service → Repository → Entity — with dedicated DTOs validating each request (@Valid) and a business exception hierarchy (PosException, RecursoNoEncontradoException) caught by a central @RestControllerAdvice that always returns the same JSON error shape.',
      },
      challenges: [
        {
          es: 'Modelar la subdivisión de mesas (la mesa "5" puede partirse en "5a", "5b", "5c" y volver a unirse) con una relación auto-referenciada en JPA, sin duplicar mesas ni perder pedidos activos en el camino.',
          en: 'Modeling table subdivision (table "5" can split into "5a", "5b", "5c" and merge back) with a self-referencing JPA relationship, without duplicating tables or losing active orders along the way.',
        },
        {
          es: 'Migrar la máquina de estados de Mesa, Pedido y Presupuesto (reglas como "no se puede subdividir una mesa ocupada") preservando exactamente la misma lógica de negocio que la versión JavaFX original, ahora con Spring gestionando las transacciones.',
          en: 'Migrating the Mesa, Pedido and Presupuesto state machines (rules like "an occupied table can\'t be subdivided") while preserving the exact same business logic as the original JavaFX version, now with Spring managing transactions.',
        },
        {
          es: 'Diseñar el flujo Presupuesto → Pedido: un presupuesto puede convertirse en un pedido real sin perder sus items, cambiando de estado sin duplicar estructuras.',
          en: 'Designing the Presupuesto → Pedido (quote-to-order) flow: a quote can become a real order without losing its items, changing state without duplicating structures.',
        },
      ],
      decisions: [
        {
          es: 'H2 en modo archivo en vez de pedir un MySQL o Postgres externo: el proyecto corre con "mvn spring-boot:run" sin instalar nada más.',
          en: 'File-based H2 instead of requiring an external MySQL or Postgres: the project runs with "mvn spring-boot:run" with nothing else to install.',
        },
        {
          es: 'Excepciones de negocio propias en vez de devolver null o booleanos: cada regla rota lanza una excepción específica que el GlobalExceptionHandler traduce a un JSON consistente con el código HTTP correcto (400 para reglas de negocio, 404 para recursos).',
          en: 'Custom business exceptions instead of returning null or booleans: every broken rule throws a specific exception that GlobalExceptionHandler translates into a consistent JSON body with the right HTTP status (400 for business rules, 404 for missing resources).',
        },
        {
          es: 'Tests con Mockito mockeando los repositorios, enfocados en la lógica de negocio de los services: no dependen de una base de datos real y corren en milisegundos.',
          en: 'Tests use Mockito to mock repositories, focused on the services\' business logic: they don\'t depend on a real database and run in milliseconds.',
        },
      ],
      learnings: {
        es: 'Fue el primer proyecto donde apliqué JPA/Hibernate y testing con Mockito en profundidad — pasar de JDBC manual a un ORM cambia por completo cómo pensás el modelado de relaciones y las transacciones.',
        en: 'This was the first project where I applied JPA/Hibernate and Mockito-based testing in depth — moving from manual JDBC to an ORM completely changes how you think about modeling relationships and transactions.',
      },
      apiDemo: [
        {
          method: 'POST',
          path: '/api/pedidos',
          body: '{"idMesa": 3}',
          status: 201,
          response: 'Pedido #14 creado (ABIERTO)',
        },
        {
          method: 'POST',
          path: '/api/pedidos/14/items',
          body: '{"idProducto": 5, "cantidad": 2}',
          status: 200,
          response: 'Pizza Margherita x2 · Total: $2400.00',
        },
        {
          method: 'POST',
          path: '/api/mesas/5/subdividir',
          body: '{"cantidadSubdivisiones": 3}',
          status: 200,
          response: 'Mesa 5 → [5a, 5b, 5c] (SUBDIVIDIDA)',
        },
        {
          method: 'GET',
          path: '/api/reportes/exportar-pdf?fecha=2024-05-26',
          status: 200,
          response: 'reporte-2024-05-26.pdf generado',
        },
      ],
    },
  },
  {
    id: 'os',
    title: {
      es: 'Desarrollo de SO basado en Linux',
      en: 'Linux-Based OS Development',
    },
    description: {
      es: 'Trabajo práctico integrador de la facultad: un sistema operativo simulado, distribuido en 7 módulos en C que se comunican por sockets, con planificación multinivel real y memoria segmentada.',
      en: 'University capstone project: a simulated operating system distributed across 7 C modules communicating over sockets, with real multilevel scheduling and segmented memory.',
    },
    technologies: ['C', 'Sockets TCP', 'pthreads', 'Makefile', 'Linux'],
    icon: 'os',
    metrics: [
      { value: '6.671', label: { es: 'líneas de C', en: 'lines of C' } },
      { value: '7', label: { es: 'módulos distribuidos', en: 'distributed modules' } },
      { value: '3', label: { es: 'algoritmos de planificación', en: 'scheduling algorithms' } },
    ],
    details: {
      problem: {
        es: 'Implementar, en equipo, un sistema operativo simplificado pero realista: procesos que se planifican, memoria que se asigna y se libera, y dispositivos de entrada/salida — todo repartido en módulos independientes que corren como procesos separados y se coordinan por red, tal como lo haría un SO real con sus subsistemas.',
        en: "Implementing, as a team, a simplified but realistic operating system: processes that get scheduled, memory that gets allocated and freed, and I/O devices — all split across independent modules that run as separate processes and coordinate over the network, the way a real OS coordinates its subsystems.",
      },
      role: {
        es: 'Participé activamente en todas las partes del proyecto: desarrollo del Kernel Scheduler (planificador) y también en la unión final y revisión de cada módulo, verificando que el protocolo entre Kernel, CPU, Memoria y Memory Sticks funcionara de punta a punta.',
        en: 'I was actively involved in every part of the project: developing the Kernel Scheduler, plus the final integration and review of every module, verifying that the protocol between Kernel, CPU, Memory and Memory Sticks worked end to end.',
      },
      architecture: {
        es: 'El sistema se divide en 7 módulos que corren como procesos independientes y se comunican por sockets TCP usando la librería de la cátedra: Kernel (Scheduler + Memory), CPU, IO, Memory Stick y Swap. El Kernel Scheduler implementa la teoría clásica de planificación en 3 niveles (largo, mediano y corto plazo) como threads reales, sincronizados con mutex y variables de condición sobre las colas NEW → READY → EXEC → BLOCKED → SUSPENDIDA → EXIT. El Kernel Memory maneja segmentación con Best/Worst Fit configurable, huecos libres, swap y compactación. La CPU simula un ciclo de instrucción fetch-decode-execute real sobre un set de instrucciones propio (SET, SUM, SUB, JNZ, MUTEX_*, MEM_ALLOC, STDOUT/STDIN, EXIT).',
        en: "The system is split into 7 modules running as independent processes, communicating over TCP sockets using the course's shared library: Kernel (Scheduler + Memory), CPU, IO, Memory Stick and Swap. The Kernel Scheduler implements classic 3-level scheduling theory (long, medium and short term) as real threads, synchronized with mutexes and condition variables across the NEW → READY → EXEC → BLOCKED → SUSPENDED → EXIT queues. Kernel Memory handles segmentation with configurable Best/Worst Fit, free-hole tracking, swap and compaction. The CPU simulates a real fetch-decode-execute instruction cycle over a custom instruction set (SET, SUM, SUB, JNZ, MUTEX_*, MEM_ALLOC, STDOUT/STDIN, EXIT).",
      },
      challenges: [
        {
          es: 'Mantener consistente el protocolo de red entre 5 módulos desarrollados en paralelo por distintas personas del equipo — la mayoría de los bugs reales aparecían en los límites entre módulos, no dentro de uno solo.',
          en: 'Keeping the network protocol consistent across 5 modules developed in parallel by different teammates — most real bugs showed up at the boundaries between modules, not inside a single one.',
        },
        {
          es: 'Implementar el planificador de 3 niveles con hilos reales (largo/mediano/corto plazo) sincronizados sobre colas compartidas sin condiciones de carrera ni deadlocks, soportando FIFO, Round Robin y Colas Multinivel detrás de la misma interfaz.',
          en: 'Implementing the 3-level scheduler with real threads (long/medium/short term) synchronized over shared queues without race conditions or deadlocks, supporting FIFO, Round Robin and Multilevel Queues behind the same interface.',
        },
        {
          es: 'Compactar memoria mientras potencialmente hay una instrucción en ejecución: hubo que coordinar con una señal explícita (¿la CPU está ejecutando?) para no tocar memoria a mitad de una instrucción.',
          en: 'Compacting memory while an instruction might be executing: this required an explicit signal (is the CPU currently executing?) so memory was never touched mid-instruction.',
        },
      ],
      decisions: [
        {
          es: 'Algoritmo de planificación seleccionable por archivo de configuración (FIFO / Round Robin con quantum / Multinivel con prioridades) en vez de codificar uno solo — permite demostrar tres estrategias distintas sin recompilar.',
          en: 'Scheduling algorithm selectable via config file (FIFO / Round Robin with quantum / Multilevel with priorities) instead of hardcoding one — lets you demo three different strategies without recompiling.',
        },
        {
          es: 'Backend de memoria "enchufable" (punteros a función para leer/escribir): la lógica de segmentación y compactación no sabe si los bytes están en un buffer local o en un Memory Stick remoto por socket.',
          en: 'A "pluggable" memory backend (function pointers for read/write): the segmentation and compaction logic doesn\'t know whether bytes live in a local buffer or on a remote Memory Stick over a socket.',
        },
        {
          es: 'Cada cambio de contexto se etiqueta con un "motivo de desalojo" explícito (quantum agotado, syscall, segfault, mutex, etc.) en vez de un cambio de estado opaco — hace que el comportamiento del planificador sea trazable al debuggear.',
          en: 'Every context switch is tagged with an explicit "deallocation reason" (quantum expired, syscall, segfault, mutex, etc.) instead of an opaque state change — makes the scheduler\'s behavior traceable when debugging.',
        },
      ],
      learnings: {
        es: 'Coordinar un sistema distribuido construido en paralelo por varias personas enseña algo que un proyecto individual no enseña: la mayoría de los problemas reales no están en la lógica de un módulo, sino en el contrato entre módulos — y ahí es donde más valió la pena invertir tiempo revisando.',
        en: "Coordinating a distributed system built in parallel by several people teaches something a solo project doesn't: most real problems aren't in a single module's logic, but in the contract between modules — and that's where reviewing time paid off the most.",
      },
      architectureDiagram: {
        hub: { title: 'Kernel', parts: ['Scheduler', 'Memory'] },
        connectorLabel: { es: 'sockets TCP', en: 'TCP sockets' },
        nodes: [
          {
            title: 'CPU',
            caption: {
              es: 'Ciclo fetch-decode-execute',
              en: 'Fetch-decode-execute cycle',
            },
          },
          {
            title: 'IO',
            caption: { es: 'Simula dispositivos', en: 'Simulates devices' },
          },
          {
            title: 'Memory Stick',
            caption: { es: 'Memoria física distribuida', en: 'Distributed physical memory' },
          },
          {
            title: 'Swap',
            caption: { es: 'Área de intercambio', en: 'Swap area' },
          },
        ],
      },
    },
  },
  {
    id: 'automata',
    title: {
      es: 'Compilador para un Lenguaje Educativo',
      en: 'Compiler for an Educational Language',
    },
    description: {
      es: 'Compilador completo con Flex + Bison en C++: análisis léxico, sintáctico y semántico con tabla de símbolos, más ejecución real de un lenguaje con asignaciones, lectura y escritura.',
      en: 'A complete Flex + Bison compiler in C++: lexical, syntactic and semantic analysis with a symbol table, plus real execution of a language with assignments, reads and writes.',
    },
    technologies: ['C++', 'Flex', 'Bison', 'Teoría de Lenguajes'],
    icon: 'automata',
    metrics: [
      { value: '14', label: { es: 'tokens reconocidos', en: 'recognized tokens' } },
      { value: '3', label: { es: 'tipos de error detectados', en: 'kinds of errors detected' } },
      { value: '281', label: { es: 'líneas de C++', en: 'lines of C++' } },
    ],
    details: {
      problem: {
        es: 'Construir, en grupo, un compilador completo para un lenguaje mínimo ("Micro"): que reconozca su vocabulario (léxico), valide su gramática (sintáctico), verifique que las variables existan antes de usarlas (semántico), y finalmente lo ejecute de verdad — no que solo diga si el programa es válido.',
        en: 'Building, as a team, a complete compiler for a minimal language ("Micro"): recognizing its vocabulary (lexical), validating its grammar (syntactic), checking that variables exist before they\'re used (semantic), and actually executing it — not just reporting whether the program is valid.',
      },
      role: {
        es: 'Tuve una participación activa en casi todo el desarrollo: fue un codesarrollo entre 2 personas, trabajando en conjunto sobre el analizador léxico, el sintáctico y el análisis semántico.',
        en: 'I was actively involved in almost the entire development: it was a co-development between 2 people, working together on the lexical, syntactic and semantic analyzers.',
      },
      architecture: {
        es: 'Compilador de 3 etapas construido con Flex (léxico) y Bison (sintáctico + semántico) en C++. El léxico reconoce 14 tokens y arma la gramática del lenguaje "Micro": asignaciones, lectura (leer) y escritura (escribir), y expresiones aritméticas con precedencia correcta entre suma/resta y multiplicación. El sintáctico construye una tabla de símbolos en tiempo de análisis: cada identificador se valida contra ella antes de usarse, y cada sentencia ejecuta su acción real al reconocerse — leer pide el valor por teclado y escribir lo imprime.',
        en: 'A 3-stage compiler built with Flex (lexical) and Bison (syntactic + semantic) in C++. The lexer recognizes 14 tokens and builds the grammar for the "Micro" language: assignments, reads (leer) and writes (escribir), and arithmetic expressions with correct precedence between addition/subtraction and multiplication. The parser builds a symbol table during analysis: every identifier is checked against it before use, and each statement runs its real action as soon as it\'s recognized — leer prompts for a value, escribir prints it.',
      },
      challenges: [
        {
          es: 'Que las expresiones respeten la precedencia matemática (2 + 3 * 4 tiene que dar 14, no 20) sin ambigüedad en la gramática — resuelto con dos niveles de producciones (una para +/-, otra anidada para *) en vez de declarar precedencia a mano.',
          en: 'Making expressions respect math precedence (2 + 3 * 4 must be 14, not 20) without grammar ambiguity — solved with two nested production levels (one for +/-, one for *) instead of hand-declared precedence.',
        },
        {
          es: 'Detectar errores semánticos (identificador no declarado, palabra reservada usada como variable) en el mismo momento en que Bison reduce la regla, sin un paso de análisis separado.',
          en: 'Detecting semantic errors (undeclared identifier, reserved word used as a variable) at the exact moment Bison reduces the rule, without a separate analysis pass.',
        },
        {
          es: 'Traducir los mensajes de error de Bison (en inglés, con "unexpected"/"expecting"/"or") a mensajes en español con número de línea, para que el compilador hable el mismo idioma que el resto del proyecto.',
          en: 'Translating Bison\'s error messages (in English, with "unexpected"/"expecting"/"or") into Spanish messages with a line number, so the compiler speaks the same language as the rest of the project.',
        },
      ],
      decisions: [
        {
          es: 'Tabla de símbolos como un mapa poblado con las palabras reservadas al iniciar (con un valor centinela), para reusar la misma estructura al detectar "palabra reservada usada como identificador" sin una lista aparte.',
          en: 'Symbol table as a map pre-populated with reserved words at startup (with a sentinel value), reusing the same structure to detect "reserved word used as identifier" without a separate list.',
        },
        {
          es: 'Ejecución real en vez de solo validación: leer/escribir interactúan con la entrada/salida durante el propio parseo, así el compilador también sirve como intérprete simple.',
          en: 'Real execution instead of just validation: leer/escribir interact with input/output during parsing itself, so the compiler also works as a simple interpreter.',
        },
        {
          es: 'Longitud máxima de identificador (32 caracteres) validada en el léxico, apenas se arma el token, en vez de más adelante — el error se reporta lo antes posible.',
          en: 'Maximum identifier length (32 characters) validated right in the lexer, as soon as the token is built, instead of later — the error gets reported as early as possible.',
        },
      ],
      learnings: {
        es: 'Entender cómo un archivo de gramática de Bison se traduce en un parser real, y que las acciones semánticas corren intercaladas con el propio parseo (no en un paso aparte), fue el salto más grande respecto a los autómatas más simples de ejercicios anteriores.',
        en: "Understanding how a Bison grammar file turns into a real parser, and that semantic actions run interleaved with parsing itself (not as a separate pass), was the biggest jump from the simpler automata in earlier exercises.",
      },
      compilerDemo: [
        {
          command: 'cat programa.micro',
          output: ['inicio', '  leer(a, b);', '  c := a * b;', '  escribir(c);', 'fin'],
        },
        {
          command: './compilador programa.micro',
          output: [
            'Ingrese valor de a: 6',
            'Ingrese valor de b: 7',
            'Leída sentencia de entrada, en línea 2.',
            'Leída sentencia de asignación, en línea 3.',
            'Leída sentencia de salida, en línea 4.',
            '42',
            'Entrada correcta!',
          ],
        },
        {
          command: "echo 'inicio escribir(z); fin' | ./compilador",
          output: ['Error semántico: "z" no es un identificador declarado, en línea 1.'],
        },
      ],
    },
  },
]
