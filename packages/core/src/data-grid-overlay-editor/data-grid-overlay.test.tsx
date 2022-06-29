import { describe, test } from "jest-without-globals";
import * as React from "react";
import { render } from "@testing-library/react";
import NumberOverlayEditor from "./private/number-overlay-editor";
import UriOverlayEditor from "./private/uri-overlay-editor";

describe("data-grid-overlay", () => {
    test("Smoke test number overlay", async () => {
        const spy = jest.fn();

        render(<NumberOverlayEditor highlight={false} onChange={spy} value={35} onKeyDown={spy} />);
    });

    test("Smoke test uri overlay editor", async () => {
        const spy = jest.fn();

        render(
            <UriOverlayEditor
                forceEditMode={false}
                onChange={spy}
                readonly={false}
                uri={"https://google.com"}
                onKeyDown={spy}
            />
        );
    });
});
