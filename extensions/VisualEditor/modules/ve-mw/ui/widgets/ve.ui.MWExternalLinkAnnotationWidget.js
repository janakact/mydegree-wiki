/*!
 * VisualEditor UserInterface MWExternalLinkAnnotationWidget class.
 *
 * @copyright 2011-2015 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Creates an ve.ui.MWExternalLinkAnnotationWidget object.
 *
 * @class
 * @extends ve.ui.LinkAnnotationWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
ve.ui.MWExternalLinkAnnotationWidget = function VeUiMWExternalLinkAnnotationWidget() {
	// Parent constructor
	ve.ui.MWExternalLinkAnnotationWidget.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.MWExternalLinkAnnotationWidget, ve.ui.LinkAnnotationWidget );

/* Static Methods */

/**
 * @inheritdoc
 */
ve.ui.MWExternalLinkAnnotationWidget.static.getAnnotationFromText = function ( value ) {
	var href = value.trim();

	// Keep annotation in sync with value
	if ( href === '' ) {
		return null;
	} else {
		return new ve.dm.MWExternalLinkAnnotation( {
			type: 'link/mwExternal',
			attributes: {
				href: href
			}
		} );
	}
};

/* Methods */

/**
 * Create a text input widget to be used by the annotation widget
 *
 * @param {Object} [config] Configuration options
 * @return {OO.ui.TextInputWidget} Text input widget
 */
ve.ui.MWExternalLinkAnnotationWidget.prototype.createInputWidget = function () {
	return new OO.ui.TextInputWidget( {
		icon: 'linkExternal',
		validate: function ( text ) {
			return !!ve.init.platform.getExternalLinkUrlProtocolsRegExp().exec( text.trim() );
		}
	} );
};
