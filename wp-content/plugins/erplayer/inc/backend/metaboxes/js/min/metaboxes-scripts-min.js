jQuery((function(e){"use strict";function t(t){t.on("click",(function(){var t,a;if(void 0===t){t=wp.media.frames.file_frame=wp.media({frame:"post",state:"insert",multiple:!1});var o=e(this).attr("rel"),i=e(this).siblings(".meta_box_upload_image"),n=e(this).siblings(".meta_box_preview_image"),r,l,s;t.on("insert",(function(){r=t.state().get("selection").first().toJSON(),l=r.url,s=r.id,n.attr("src",l),i.val(s)})),t.open()}else t.open()}))}function a(t){t.on("click",(function(){var t=e(this).parent().siblings(".meta_box_default_image").text();return e(this).parent().siblings(".meta_box_upload_image").val(""),e(this).parent().siblings(".meta_box_preview_image").attr("src",t),!1}))}function o(e,t){if(e)return new RegExp("("+t.join("|").replace(/\./g,"\\.")+")$").test(e)}function i(t){t.on("click",(function(){var t,a;if(void 0===t){t=wp.media.frames.file_frame=wp.media({frame:"post",state:"insert",multiple:!1});var i=e(this).attr("rel"),n=e(this).siblings(".meta_box_upload_file_new"),r=e(this).closest(".qw_repeatable_row").find("[id$=_track_title]"),l=e(this).closest(".qw_repeatable_row").find("[id$=_artist_name]"),s,c,d,m;t.on("insert",(function(){if(c=t.state().get("selection"),s=t.state().get("selection").first().toJSON(),d=s.url,m=s.id,n.val(d),o(d,[".mp3"])){var e=s.title,a=s.meta.artist;e&&r&&r.val(e),a&&l&&l.val(a)}})),t.open()}else t.open()}))}function n(t){t.on("click",(function(){return e(this).parent().siblings(".meta_box_upload_file_new").val(""),!1}))}function r(){e(".qw-conditional-fields").each((function(){var t="";e(this).find("option:selected").each((function(){e(this).attr("data-tohide")&&(e.toHideArray=e(this).attr("data-tohide").split("[+]"),e.toHideArray.length>0&&e.each(e.toHideArray,(function(t,a){e(a).closest(".metabox-controlfield").not("qw-hidden")&&e(a).closest(".metabox-controlfield").addClass("qw-hidden")}))),e(this).attr("data-toreveal")&&(e.toRevealArray=e(this).attr("data-toreveal").split("[+]"),e.toRevealArray.length>0&&e.each(e.toRevealArray,(function(t,a){e(a).closest(".metabox-controlfield").removeClass("qw-hidden")})))}))}))}function l(){function o(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a].val)}t(e(".meta_box_upload_image_button")),i(e(".meta_box_upload_file_new_button")),a(e(".meta_box_clear_image_button")),n(e(".meta_box_clear_file_button")),e(".meta_box_clear_file_button").on("click",(function(){return e(this).parent().siblings(".meta_box_upload_file").val(""),e(this).parent().siblings(".meta_box_filename").text(""),e(this).parent().siblings(".meta_box_file").removeClass("checked"),!1})),e(".meta_box_repeatable_remove").on("click",(function(){return e(this).closest("tr").remove(),!1})),e(".meta_box_repeatable tbody").sortable({opacity:.6,revert:!0,cursor:"move",handle:".hndle"}),e(".sort_list").sortable({connectWith:".sort_list",opacity:.6,revert:!0,cursor:"move",cancel:".post_drop_sort_area_name",items:"li:not(.post_drop_sort_area_name)",update:function(t,a){var o=e(this).sortable("toArray"),i=e(this).attr("id");e(".store-"+i).val(o)}}),e(".sort_list").disableSelection()}e(document).ready((function(){e("form").attr("novalidate","novalidate"),e(".meta_box_color").wpColorPicker()})),r(),e(".qw-conditional-fields").on("change",(function(){r()})),l(),e(".meta_box_repeatable_add").on("click",(function(o){o.preventDefault();var r=e(this).closest(".meta_box_repeatable").find("tbody tr:last-child"),l=r.clone();l.find("select.chosen").removeAttr("style","").removeAttr("id","").removeClass("chzn-done").data("chosen",null).next().remove(),l.find("input.regular-text, textarea, select, .meta_box_upload_file ").val(""),l.find("input[type=checkbox], input[type=radio]").attr("checked",!1),l.find("span.meta_box_filename").html("");var s=l.find(".meta_box_upload_file_button"),c=l.find(".meta_box_upload_image_button"),d=l.find(".meta_box_clear_image_button");l.find("img.meta_box_preview_image").attr("src","");var m=l.find(".meta_box_upload_file_new_button"),_=l.find(".meta_box_upload_file_new_button"),u=l.find(".meta_box_clear_file_button");t(c),i(_),a(d),n(d),r.after(l),l.find("input, textarea, select").attr("name",(function(e,t){if(void 0!==t)return t.replace(/(\d+)/,(function(e,t){return Number(t)+1}))}));var f=[];return e("input.repeatable_id:text").each((function(){f.push(e(this).val())})),l.find("input.repeatable_id").val(Number(Math.max.apply(Math,f))+1),!1})),e("a.qw-iconreference-open").on("click",(function(t){t.preventDefault(),e("body").addClass("qwModalFormOpen"),e("#qwModalForm").height(e(window).height()),e.iconTarget=e(this).attr("data-target"),e("#adminmenuwrap").css({"z-index":"10"})})),e("#qw-closemodal").on("click",(function(t){e("body").removeClass("qwModalFormOpen"),e("#adminmenuwrap").css({"z-index":"1000"})})),e("#qwiconsMarket").on("click",".btn",(function(t){t.preventDefault();var a=e(this).attr("data-icon"),o;null!=e.iconTarget&&("tinymce"!==e.iconTarget?(e("#"+e.iconTarget).val(a),e("#theIcon"+e.iconTarget).removeClass().addClass(a+" bigicon")):tinymce.activeEditor.execCommand("mceInsertContent",!1,'[qticon class="'+a+'" size="s|m|l|xl|xxl"]'),e("body").removeClass("qwModalFormOpen"),e("#adminmenuwrap").css({"z-index":"1000"}))})),e(".qw_hider").on("click",(function(t,a){var o=e(this);e(".qw_hiddenable").addClass("qw-hide").promise().done((function(){e(".qw_hiddenable .qw_hider").addClass("dashicons-hidden").removeClass("dashicons-visibility"),o.closest(".qw_hiddenable").removeClass("qw-hide"),o.removeClass("dashicons-hidden").addClass("dashicons-visibility")}))})),e(".geocodefunction").on("click",(function(t,a){var o,i=e(this).attr("data-target"),n=e("#address-"+i).attr("value"),r=e("#results-"+i),l=new google.maps.Geocoder,s=e("#map-"+i);l.geocode({address:n},(function(t,a){if(a===google.maps.GeocoderStatus.OK){s.height("180px");var o=new google.maps.Map(document.getElementById("map-"+i),{zoom:10,center:{lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng()}});o.setCenter(t[0].geometry.location);var n=new google.maps.Marker({map:o,position:t[0].geometry.location}),t=t[0].geometry.location.lat()+","+t[0].geometry.location.lng();r.html(""),e("#"+i).attr("value",t)}else r.html("Geocode was not successful for the following reason: "+a)}))})),e(".qt-tabs .qt-tabnav a").on("click",(function(t){t.preventDefault();var a=e(this),o=a.attr("href");a.closest(".qt-tabs").find(".qt-tab.active").removeClass("active"),e(o).addClass("active")})),e(".metabox-conditional").each((function(t,a){var o=e(a),i=o.data("metabox-conditions"),n,r,l;e.each(i,(function(t,a){e("#"+a.field).each((function(t,i){(r=e(i)).on("change",(function(){n=e(this).val(),a.value===n?o.show():o.hide()})).trigger("change")}))}))}))}));