### The resolving Algorithm.

To understand The resolving Algorithm, a good understanding of dependency hell is needed. _Dependency Hell_ describes a situation whereby two or more dependency of a program in-turn depend on a shared dependency but require different and icompatible version of the same module.

- The resolving algorithm is the core part behind the robustness of the Node.js dependency management, and it makes it possible to have hundreds or even thousands of packages in an application without having collisions or problems of version compatibility.

- The Steps are as follows:
  1️⃣ The processing starts from index.js, which immediately requires a.js.
  2️⃣ The first thing that module 'a' does is it to require module 'b'
  3️⃣Just like 'a', module 'b' also requires 'a' (cycle)
  4️⃣ Since a.js has already been traversed, its currently exported value is immediately copied into the scope of module b.js.
  5️⃣
  6️⃣ and back to

Read Futher. - My Notes [https://tin-cafe-f64.notion.site/The-resolving-Algorithm-c3c542d90fa3424eb261e550077784df]
