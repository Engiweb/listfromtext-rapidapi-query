declare type TProcessBasic = {
    versions?: {
        node?: unknown;
    };
};
declare type TProcess = TProcessBasic | undefined;
declare const checkNodeOrBrowser: (process: TProcess) => boolean;
export default checkNodeOrBrowser;
