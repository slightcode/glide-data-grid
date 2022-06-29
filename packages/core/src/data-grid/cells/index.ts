import { GridCellKind, InnerGridCell, InnerGridCellKind } from "../data-grid-types";
import { booleanCellRenderer } from "./boolean-cell";
import { InternalCellRenderer } from "./cell-types";
import { loadingCellRenderer } from "./loading-cell";
import { markerCellRenderer } from "./marker-cell";
import { newRowCellRenderer } from "./new-row-cell";
import { numberCellRenderer } from "./number-cell";
import { protectedCellRenderer } from "./protected-cell";
import { rowIDCellRenderer } from "./row-id-cell";
import { textCellRenderer } from "./text-cell";
import { uriCellRenderer } from "./uri-cell";

// we are giving up type safety here but I cant figure out right now how to do this right.
const asCollapsed = (x: any) => x as InternalCellRenderer<InnerGridCell>;

type RendererKinds = InnerGridCellKind | Exclude<GridCellKind, GridCellKind.Custom>;

export const CellRenderers: Record<RendererKinds, ReturnType<typeof asCollapsed>> = {
    [InnerGridCellKind.Marker]: asCollapsed(markerCellRenderer),
    [InnerGridCellKind.NewRow]: asCollapsed(newRowCellRenderer),
    [GridCellKind.Boolean]: asCollapsed(booleanCellRenderer),
    [GridCellKind.Loading]: asCollapsed(loadingCellRenderer),
    [GridCellKind.Number]: asCollapsed(numberCellRenderer),
    [GridCellKind.Protected]: asCollapsed(protectedCellRenderer),
    [GridCellKind.RowID]: asCollapsed(rowIDCellRenderer),
    [GridCellKind.Text]: asCollapsed(textCellRenderer),
    [GridCellKind.Uri]: asCollapsed(uriCellRenderer),
};
