import {
    initFunObj
} from './columnInit';

class column {
    constructor(options, gridComp) {
        this.init(options, gridComp);
    }
};
var gridCompColumnProto = column.prototype;
if(!Object.assign){
	Object.assign = u.extend;
}
Object.assign(gridCompColumnProto, initFunObj);

/*
 * tree
 */
import {
    treeFunObj
} from './re_gridCompTree';

gridCompColumnProto.initTree = treeFunObj.re_initTree;

export {
    column
}
