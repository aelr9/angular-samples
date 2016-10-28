/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../components/dependency-injection/address-book';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../../components/dependency-injection/address-book-service';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../../components/dependency-injection/address-book-title-service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
export class Wrapper_AddressBook {
  context:import0.AddressBook;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.AddressBook(p0,p1);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_AddressBook_Host:import2.RenderComponentType = (null as any);
class _View_AddressBook_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AddressBookService_0_4:import4.AddressBookService;
  _AddressBook_0_5:Wrapper_AddressBook;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_AddressBook_Host0,renderType_AddressBook_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'address-book',import5.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AddressBook0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AddressBookService_0_4 = new import4.AddressBookService(this.parentInjector.get(import9.Http));
    this._AddressBook_0_5 = new Wrapper_AddressBook(this._AddressBookService_0_4,this.parentInjector.get(import10.AddressBookTitleService));
    this._appEl_0.initComponent(this._AddressBook_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._AddressBook_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import4.AddressBookService) && (0 === requestNodeIndex))) { return this._AddressBookService_0_4; }
    if (((token === import0.AddressBook) && (0 === requestNodeIndex))) { return this._AddressBook_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AddressBook_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AddressBook_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AddressBook_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AddressBook_Host === (null as any))) { (renderType_AddressBook_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AddressBook_Host0(viewUtils,parentInjector,declarationEl);
}
export const AddressBookNgFactory:import12.ComponentFactory<import0.AddressBook> = new import12.ComponentFactory<import0.AddressBook>('address-book',viewFactory_AddressBook_Host0,import0.AddressBook);
const styles_AddressBook:any[] = ([] as any[]);
var renderType_AddressBook:import2.RenderComponentType = (null as any);
class _View_AddressBook0 extends import1.AppView<import0.AddressBook> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import3.AppElement;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import13.Wrapper_NgFor;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _el_16:any;
  _text_17:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_AddressBook0,renderType_AddressBook,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
    this._expr_21 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'div',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'h1',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Dependency Injection',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import5.createRenderElement(this.renderer,this._el_0,'h2',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_8 = import5.createRenderElement(this.renderer,this._el_0,'table',new import5.InlineArray2(2,'class','table'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = import5.createRenderElement(this.renderer,this._el_8,'tbody',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._appEl_11 = new import3.AppElement(11,10,this,this._anchor_11);
    this._TemplateRef_11_5 = new import14.TemplateRef_(this._appEl_11,viewFactory_AddressBook1);
    this._NgFor_11_6 = new import13.Wrapper_NgFor(this._appEl_11.vcRef,this._TemplateRef_11_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_12 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_15 = import5.createRenderElement(this.renderer,parentRenderNode,'h4',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._el_16 = import5.createRenderElement(this.renderer,this._el_15,'a',new import5.InlineArray2(2,'href','http://www.syntaxsuccess.com/viewarticle/dependency-injection-in-angular-2.0'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Read more here',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._anchor_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._el_16,
      this._text_17
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import16.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_11_0_0:any = this.context.result.people;
    this._NgFor_11_6.check_ngForOf(currVal_11_0_0,throwOnChange,false);
    this._NgFor_11_6.detectChangesInInputProps(this,this._anchor_11,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_21:any = import5.interpolate(1,'',this.context.title,'');
    if (import5.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setText(this._text_6,currVal_21);
      this._expr_21 = currVal_21;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_AddressBook0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AddressBook> {
  if ((renderType_AddressBook === (null as any))) { (renderType_AddressBook = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_AddressBook,{})); }
  return new _View_AddressBook0(viewUtils,parentInjector,declarationEl);
}
class _View_AddressBook1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_AddressBook1,renderType_AddressBook,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'tr',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'td',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_5 = import5.createRenderElement(this.renderer,this._el_0,'td',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_8:any = import5.interpolate(1,'',this.context.$implicit.name,'');
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_3,currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = import5.interpolate(1,'',this.context.$implicit.address,'');
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_6,currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AddressBook1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AddressBook1(viewUtils,parentInjector,declarationEl);
}