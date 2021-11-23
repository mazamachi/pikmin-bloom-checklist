export const About = () => (
  <>
    <section>
      <h3>What is this?</h3>
      <p>
        This web app is a checklist to help you keep track of which type of
        Decor Pikmin you have collected in the Pikmin Bloom game available for
        Android and iOS.
      </p>
      <h3>How does it work?</h3>
      <p>
        Click on the icon corresponding to the collected Decor Pikmin to change
        from ❌ to ✅. It will be saved on this device until you clear your
        browser's storage.
      </p>
      <p>
        Click on the icon again to change to 🥚, indicating you are currently
        growing this type/color of Decor Pikmin.
      </p>
      <p>
        You can also share your progress between devices by using the "Share"
        button which will generate a URL containing your collection to be sent
        to the other device, and clear your progress with the "Clear" button.
      </p>
      <h3>Why?</h3>
      <p>
        The collection screen in Pikmin is hard to browse. This web app makes it
        easier to quickly see which Decor Pikmin you are missing.
      </p>
      <h3>Decor Pikmin?</h3>
      <p>
        If you have no idea how Decor Pikmin work, I'd suggest starting here:{" "}
        <a href="https://www.pikminwiki.com/Decor_Pikmin" target="_blank">
          https://www.pikminwiki.com/Decor_Pikmin
        </a>{" "}
        or reading the sections below.
      </p>
      <h4>How do I get Decor Pikmin?</h4>
      <p>
        In Pikmin Bloom, every Pikmin you get has the potential to become a
        "Decor Pikmin". This can happen two different ways:
      </p>
      <ol>
        <li>
          You get the Pikmin from a Huge Seedling. Once it is grown into a
          Pikmin, it will have decor based on the type of place it was found in.
        </li>
        <li>
          You get up to the maximum level of friendship (4 full hearts). Once
          this happens, a special expedition will be available for this Pikmin
          to go on by itself, and it will come back with a decor matching the
          type of place it was found in.
        </li>
      </ol>
      <h4>How do I know which Decor Pikmin I have?</h4>
      <p>
        In order to know which ones you already have, you can check your "Decor
        Collector" badge progress. To do so:
      </p>
      <ol>
        <li>
          Tap your user profile from the home screen (the panel that shows your
          username)
        </li>
        <li>Tap the Decor Collector badge</li>
      </ol>
      <p>
        This will show you all the Decor Pikmin you already have. If you want to
        get all the Decors as swiftly as possible, you could mark the Seedlings
        and Pikmin of a color and type of Decor you don't already have and
        prioritize growing and making friends with those first.
      </p>
      <h4>How do I know which Decor a Pikmin or Seedling will get?</h4>
      <p>
        This depends on the type of location the Seedling was obtained in, which
        you can find on both the Seedling page and the Pikmin page. The Forest
        and Supermarket types have two different variations which the Pikmin
        will randomly get when it is decorated.
      </p>
    </section>
    <footer>
      <h3>Credits and licensing</h3>
      <p>
        <strong>Disclaimer:</strong> This web app is not affiliated with Niantic
        or Nintendo.
      </p>
      <ul>
        <li>
          Decor Icons retrieved from{" "}
          <a href="https://www.pikminwiki.com/Decor_Pikmin" target="_blank">
            https://www.pikminwiki.com/Decor_Pikmin
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/beetle/396855/"
            target="_blank"
          >
            Beetle by Erik Jensen from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/banana/2770445/"
            target="_blank"
          >
            banana by Izwar Muis from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/mushroom/3194002/"
            target="_blank"
          >
            Mushroom by Adrien Coquet from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/acorn/4408016/"
            target="_blank"
          >
            Acorn by KP Arts from the Noun Project
          </a>
        </li>
      </ul>
      <p>
        Created with{" "}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
        .
      </p>
      <h3>Contributions</h3>
      <p>
        <strong>Suggestions, corrections, bug reports?</strong> Please{" "}
        <a href="#">file an issue or open a pull request on GitHub</a>.
      </p>
    </footer>
  </>
);