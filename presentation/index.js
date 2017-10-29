// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  Image,
  Link,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Webassembly with rust
          </Heading>
          <Text textColor="primary">@ilavriv</Text>
        </Slide>
        <Slide transition={["zoom", "slide"]}>
          <Heading>5 mins about Webassembly</Heading>
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary">LLVM</Heading>

          <List>
            <ListItem>Clang</ListItem>
            <ListItem>Rust compiller</ListItem>
            <ListItem>libc++</ListItem>
            <ListItem>Emscripten</ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <List textColor="tertiary">
            <ListItem>New fast binary format for browsers</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
         <Heading size="1.3em">Benefits of webassembly</Heading>
          <List textColor="tertiary">
            <ListItem>Portable games</ListItem>
            <ListItem>Audio / video streeming</ListItem>
            <ListItem>Peer to peer applications</ListItem>
            <ListItem>Portable libraries</ListItem>
            <ListItem>Image recognition</ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <List textColor="tertiary">
            <ListItem>February 2017 ( MVP )</ListItem>
            <ListItem>Marth 2017 integration</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em">Platforms</Heading>
          <List textColor="tertiary">
            <ListItem>Chrome 57</ListItem>
            <ListItem>Firefox 52</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading>Compilation</Heading>


          <List textColor="tertiary">
            <ListItem>Bynarien</ListItem>
            <ListItem>WABT</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading>Incoming features</Heading>
          <List textColor="tertiary">
            <ListItem>Specification</ListItem>
            <ListItem>Threads</ListItem>
            <ListItem>Fixed-width SIMD</ListItem>
            <ListItem>Exception handling</ListItem>
            <ListItem>Garbage collection</ListItem>
            <ListItem>ECMAScript module integration</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading>10 mins about Rust</Heading>
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <Quote textColor="tertiary">
            System language from Mozilla Foundation
          </Quote>

          <Text><Link href="https://doc.rust-lang.org">https://doc.rust-lang.org</Link></Text>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading>Benefits of rust</Heading>

          <List textColor="tertiary">
            <ListItem>Fast</ListItem>
            <ListItem>Memory Safe</ListItem>
            <ListItem>Low level compilation</ListItem>
            <ListItem>Modern synthax</ListItem>
            <ListItem>Immutable data</ListItem>
            <ListItem>Progressive language idioms</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`
            let foo = 1; // define variable
            let mut bar = 1; // define mutable variable

            const bazz = 20; // define constant
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( functions )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`
            
            fn sum(x: i32, y: i32) -> i32 {
              x + y
            }`}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( structs )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`

            use std::f64::consts::{PI};
             
            struct Circle {
              radius: i32
            }

            impl Circle {
              fn area(&self) {
                PI * self.radius * self.radius
              }
            }


            let c = Circle{ 1, 2 };

            c.area();
          `}
          />
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( Trait )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`

            use std::f64::consts::{PI};

            trait Figure { 
              area(&self) -> i32
            }
             
            struct Circle {
              radius: i32
            }

            impl Figure for Circle {
              fn area(&self) {
                PI * self.radius * self.radius
              }
            }


            let c = Circle{ 1, 2 };
            c.area()
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( Borrowing )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`

            let i = 2;

            {
              let borrow = &i; // start livetime of variable

              println!("borrow: {}", borrow1);

              // end livetime of variable
            }
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( Livetime extended )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`

            struct Foo<'a> {
              x: &a'i32
            }

            fn main() {
              let x;
              {
                let y = &5;
                
                let foo = Foo{ x: y };

                x = &f.x;
              }

              // x  out of the scope
            }
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( modules )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`

            mod a {
              pub fn foo() {}
            }

            mod a;

            a::foo();
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( crates )</Heading>
          <CodePane lang="rust"
            textSize="1.2rem" source={`

            extern crate foo;

            use foo::module;

            fn main() {
              module::bar();
            }
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="lightorange" bold>Simple rust guide ( cargo )</Heading>
          <CodePane lang="bash"
            textSize="1.2rem" source={`

            cargo new <app-name> --bin

            cargo build

            cargo run

            cargo install <crate>
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary" bold>Find more on the <Link href="http:://crates.io">crates.io</Link></Heading>
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary" bold>Find more on the crates.io</Heading>
          <Image src="https://d1ro8r1rbfn3jf.cloudfront.net/ms_109169/GdBI70EDroKV13nlndv2qk0kCQOoGa/Cargo%253A%2Bpackages%2Bfor%2BRust%2B%25F0%259F%2594%258A%2B2017-10-26%2B14-02-18.png?Expires=1509102150&Signature=eV1e1lnjnr1xte5GtdWTDzvELMg-yZyndJG7xpXUTnWr3pp6Mxi48P9SzFbMbIeXxKkOTF2hMuANPBlYfWlffMlgH1NTeCmLfCTWzDKp6cS0jcWlPfplMikUWRQ-oYi4hC-KnVuRIqIDsRdSnyNbIVgyb2mYrq9rVWhm~BueepaTXX2b1TJodSTlMMjwuqEBGAz4XxDy3Z~Aufda-Z-slOJrO7021EE-S0ZQzBX2C74tXlOgfVT7YV8QPayHr5riUPhclrpIL5SSg39nusPm5HyV-KrCxa4HNdhKdEWotkXIUAfxf5ZSzz8Vb5dDkQpUC6VytyNVGCmUR-qIqKTxEg__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA" width="100%" />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary" bold>Rust meets Webassembly</Heading>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary" bold>Emscripten</Heading>

          <Text><Link href=" http://emscripten.org">http://emscripten.org</Link></Text>
        </Slide>

        <Slide transition={["zoom", "slide"]}>

          <CodePane lang="bash"
            textSize="1.2rem" source={`

          curl https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz | tar -xv -C ~/
          cd ~/emsdk-portable
          ./emsdk update
          ./emsdk install sdk-incoming-64bit
          ./emsdk activate sdk-incoming-64bit
          `}
          />
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary" bold>webplatform</Heading>

          <Text><Link href="https://github.com/rust-webplatform/rust-webplatform">rust-webplatform/rust-webplatform</Link></Text>
        </Slide>

        <Slide transition={["zoom", "slide"]}>

          <CodePane lang="rust"
            textSize="1.2rem" source={`

            extern crate webplatform;

            fn main() {
                let document = webplatform::init();
                let body = document.element_query("body").unwrap();
                body.html_set("<h1>HELLO FROM RUST</h1> <button>CLICK ME</button>");
                let button = document.element_query("button").unwrap();
                button.on("click", |_| webplatform::alert("WITNESS ME"));
            }
          `}
          />
        </Slide>


        <Slide transition={["zoom", "slide"]}>

          <CodePane lang="bash"
            textSize="1.2rem" source={`

            cargo build --target=wasm32-unknown-emscripten --release
          `}
          />
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <CodePane lang="js"
            textSize="1.2rem" source={`

            var Module = {};
            fetch('webassembly_example-f9f918c6a74bd929.wasm')
              .then(response => response.arrayBuffer())
              .then(buffer => {
                 Module.wasmBinary = buffer;
                 const script = document.createElement('script');
                 script.src = "./webassembly_example-f9f918c6a74bd929.js";
                 document.body.appendChild(script);
              });
          `}
          />
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary">More</Heading>

          <List textColor="tertiary">
            <ListItem>Handlebars</ListItem>
            <ListItem>Mustache</ListItem>

            <ListItem>React / jsx</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary">Summary</Heading>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary">Any questions?</Heading>
        </Slide>


        <Slide transition={["zoom", "slide"]}>
          <Heading size="1.3em" textColor="tertiary">Thank you</Heading>

          <List textColor="tertiary">
            <ListItem><Text bold>twitter</Text> @ilavriv</ListItem>
            <ListItem><Text bold>github</Text> @lavriv92</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
