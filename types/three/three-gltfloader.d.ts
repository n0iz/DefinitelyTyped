import {LoadingManager} from "three/three-core";
import {Group} from "three/three-core";

export class GLTFLoader {
    
    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    dracoLoader: LoadingManager;
    crossOrigin: string

    load(url: string, onLoad: (group: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    
    setCrossOrigin(value: string) : void;
    setPath(value: string) : void;
    setResourcePath(value: string): void;
    setDRACOLoader(dracoLoader: LoadingManager): void;
    parse(data: any, path: string, onLoad: (group: Group) => void, onError?: (event: ErrorEvent) => void) : Group;    
}

export as namespace THREE;