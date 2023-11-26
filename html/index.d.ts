/// <reference lib="dom" />
/// <reference types="./index.d.ts" />
import type { render__env_T, tag_T } from '../isomorphic/index.js'
type arg_a_T<env_T extends render__env_T, tag_name_T> = Parameters<tag_T<env_T, HTMLElementTagNameMap[tag_name_T]>>
type ret_T<env_T extends render__env_T, tag_name_T> = ReturnType<tag_T<env_T, HTMLElementTagNameMap[tag_name_T]>>
export declare function a_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'a'>):ret_T<env_T, 'a'>
export declare function abbr_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'abbr'>):ret_T<env_T, 'abbr'>
export declare function address_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'address'>):ret_T<env_T, 'address'>
export declare function area_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'area'>):ret_T<env_T, 'area'>
export declare function article_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'article'>):ret_T<env_T, 'article'>
export declare function aside_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'aside'>):ret_T<env_T, 'aside'>
export declare function audio_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'audio'>):ret_T<env_T, 'audio'>
export declare function b_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'b'>):ret_T<env_T, 'b'>
export declare function base_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'base'>):ret_T<env_T, 'base'>
export declare function bdi_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'bdi'>):ret_T<env_T, 'bdi'>
export declare function bdo_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'bdo'>):ret_T<env_T, 'bdo'>
export declare function blockquote_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'blockquote'>):ret_T<env_T, 'blockquote'>
export declare function body_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'body'>):ret_T<env_T, 'body'>
export declare function br_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'br'>):ret_T<env_T, 'br'>
export declare function button_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'button'>):ret_T<env_T, 'button'>
export declare function canvas_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'canvas'>):ret_T<env_T, 'canvas'>
export declare function caption_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'caption'>):ret_T<env_T, 'caption'>
export declare function cite_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'cite'>):ret_T<env_T, 'cite'>
export declare function code_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'code'>):ret_T<env_T, 'code'>
export declare function col_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'col'>):ret_T<env_T, 'col'>
export declare function colgroup_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'colgroup'>):ret_T<env_T, 'colgroup'>
export declare function data_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'data'>):ret_T<env_T, 'data'>
export declare function datalist_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'datalist'>):ret_T<env_T, 'datalist'>
export declare function dd_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'dd'>):ret_T<env_T, 'dd'>
export declare function del_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'del'>):ret_T<env_T, 'del'>
export declare function details_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'details'>):ret_T<env_T, 'details'>
export declare function dfn_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'dfn'>):ret_T<env_T, 'dfn'>
export declare function dialog_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'dialog'>):ret_T<env_T, 'dialog'>
export declare function div_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'div'>):ret_T<env_T, 'div'>
export declare function dl_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'dl'>):ret_T<env_T, 'dl'>
export declare function dt_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'dt'>):ret_T<env_T, 'dt'>
export declare function em_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'em'>):ret_T<env_T, 'em'>
export declare function embed_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'embed'>):ret_T<env_T, 'embed'>
export declare function fieldset_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'fieldset'>):ret_T<env_T, 'fieldset'>
export declare function figcaption_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'figcaption'>):ret_T<env_T, 'figcaption'>
export declare function figure_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'figure'>):ret_T<env_T, 'figure'>
export declare function footer_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'footer'>):ret_T<env_T, 'footer'>
export declare function form_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'form'>):ret_T<env_T, 'form'>
export declare function h1_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'h1'>):ret_T<env_T, 'h1'>
export declare function h2_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'h2'>):ret_T<env_T, 'h2'>
export declare function h3_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'h3'>):ret_T<env_T, 'h3'>
export declare function h4_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'h4'>):ret_T<env_T, 'h4'>
export declare function h5_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'h5'>):ret_T<env_T, 'h5'>
export declare function h6_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'h6'>):ret_T<env_T, 'h6'>
export declare function head_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'head'>):ret_T<env_T, 'head'>
export declare function header_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'header'>):ret_T<env_T, 'header'>
export declare function hgroup_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'hgroup'>):ret_T<env_T, 'hgroup'>
export declare function hr_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'hr'>):ret_T<env_T, 'hr'>
export declare function html_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'html'>):ret_T<env_T, 'html'>
export declare function i_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'i'>):ret_T<env_T, 'i'>
export declare function iframe_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'iframe'>):ret_T<env_T, 'iframe'>
export declare function img_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'img'>):ret_T<env_T, 'img'>
export declare function input_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'input'>):ret_T<env_T, 'input'>
export declare function ins_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'ins'>):ret_T<env_T, 'ins'>
export declare function kbd_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'kbd'>):ret_T<env_T, 'kbd'>
export declare function label_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'label'>):ret_T<env_T, 'label'>
export declare function legend_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'legend'>):ret_T<env_T, 'legend'>
export declare function li_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'li'>):ret_T<env_T, 'li'>
export declare function link_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'link'>):ret_T<env_T, 'link'>
export declare function main_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'main'>):ret_T<env_T, 'main'>
export declare function map_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'map'>):ret_T<env_T, 'map'>
export declare function mark_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'mark'>):ret_T<env_T, 'mark'>
export declare function menu_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'menu'>):ret_T<env_T, 'menu'>
export declare function meta_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'meta'>):ret_T<env_T, 'meta'>
export declare function meter_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'meter'>):ret_T<env_T, 'meter'>
export declare function nav_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'nav'>):ret_T<env_T, 'nav'>
export declare function noscript_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'noscript'>):ret_T<env_T, 'noscript'>
export declare function object_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'object'>):ret_T<env_T, 'object'>
export declare function ol_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'ol'>):ret_T<env_T, 'ol'>
export declare function optgroup_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'optgroup'>):ret_T<env_T, 'optgroup'>
export declare function option_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'option'>):ret_T<env_T, 'option'>
export declare function output_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'output'>):ret_T<env_T, 'output'>
export declare function p_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'p'>):ret_T<env_T, 'p'>
export declare function picture_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'picture'>):ret_T<env_T, 'picture'>
export declare function pre_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'pre'>):ret_T<env_T, 'pre'>
export declare function progress_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'progress'>):ret_T<env_T, 'progress'>
export declare function q_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'q'>):ret_T<env_T, 'q'>
export declare function rp_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'rp'>):ret_T<env_T, 'rp'>
export declare function rt_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'rt'>):ret_T<env_T, 'rt'>
export declare function ruby_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'ruby'>):ret_T<env_T, 'ruby'>
export declare function s_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 's'>):ret_T<env_T, 's'>
export declare function samp_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'samp'>):ret_T<env_T, 'samp'>
export declare function script_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'script'>):ret_T<env_T, 'script'>
export declare function search_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'search'>):ret_T<env_T, 'search'>
export declare function section_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'section'>):ret_T<env_T, 'section'>
export declare function select_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'select'>):ret_T<env_T, 'select'>
export declare function slot_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'slot'>):ret_T<env_T, 'slot'>
export declare function small_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'small'>):ret_T<env_T, 'small'>
export declare function source_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'source'>):ret_T<env_T, 'source'>
export declare function span_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'span'>):ret_T<env_T, 'span'>
export declare function strong_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'strong'>):ret_T<env_T, 'strong'>
export declare function style_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'style'>):ret_T<env_T, 'style'>
export declare function sub_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'sub'>):ret_T<env_T, 'sub'>
export declare function summary_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'summary'>):ret_T<env_T, 'summary'>
export declare function sup_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'sup'>):ret_T<env_T, 'sup'>
export declare function table_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'table'>):ret_T<env_T, 'table'>
export declare function tbody_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'tbody'>):ret_T<env_T, 'tbody'>
export declare function td_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'td'>):ret_T<env_T, 'td'>
export declare function template_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'template'>):ret_T<env_T, 'template'>
export declare function textarea_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'textarea'>):ret_T<env_T, 'textarea'>
export declare function tfoot_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'tfoot'>):ret_T<env_T, 'tfoot'>
export declare function th_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'th'>):ret_T<env_T, 'th'>
export declare function thead_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'thead'>):ret_T<env_T, 'thead'>
export declare function time_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'time'>):ret_T<env_T, 'time'>
export declare function title_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'title'>):ret_T<env_T, 'title'>
export declare function tr_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'tr'>):ret_T<env_T, 'tr'>
export declare function track_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'track'>):ret_T<env_T, 'track'>
export declare function u_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'u'>):ret_T<env_T, 'u'>
export declare function ul_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'ul'>):ret_T<env_T, 'ul'>
export declare function var__<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'var_'>):ret_T<env_T, 'var_'>
export declare function video_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'video'>):ret_T<env_T, 'video'>
export declare function wbr_<env_T extends render__env_T>(...arg_a:arg_a_T<env_T, 'wbr'>):ret_T<env_T, 'wbr'>