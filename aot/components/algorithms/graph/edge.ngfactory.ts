/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../components/algorithms/graph/edge';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import11 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '@angular/common/src/directives/ng_style';
export class Wrapper_Edge {
  context:import0.Edge;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.Edge();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_Edge_Host:import2.RenderComponentType = (null as any);
class _View_Edge_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Edge_0_4:Wrapper_Edge;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Edge_Host0,renderType_Edge_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'edge',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Edge0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Edge_0_4 = new Wrapper_Edge();
    this._appEl_0.initComponent(this._Edge_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Edge_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Edge) && (0 === requestNodeIndex))) { return this._Edge_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Edge_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._Edge_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Edge_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_Edge_Host === (null as any))) { (renderType_Edge_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Edge_Host0(viewUtils,parentInjector,declarationEl);
}
export const EdgeNgFactory:import9.ComponentFactory<import0.Edge> = new import9.ComponentFactory<import0.Edge>('edge',viewFactory_Edge_Host0,import0.Edge);
const styles_Edge:any[] = ([] as any[]);
var renderType_Edge:import2.RenderComponentType = (null as any);
class _View_Edge0 extends import1.AppView<import0.Edge> {
  _el_0:any;
  _NgStyle_0_3:import10.Wrapper_NgStyle;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Edge0,renderType_Edge,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','edge'),(null as any));
    this._NgStyle_0_3 = new import10.Wrapper_NgStyle(this.parentInjector.get(import11.KeyValueDiffers),new import12.ElementRef(this._el_0),this.renderer);
    this.init(([] as any[]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.style;
    this._NgStyle_0_3.check_ngStyle(currVal_0_0_0,throwOnChange,false);
    this._NgStyle_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NgStyle_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Edge0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.Edge> {
  if ((renderType_Edge === (null as any))) { (renderType_Edge = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_Edge,{})); }
  return new _View_Edge0(viewUtils,parentInjector,declarationEl);
}