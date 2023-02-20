/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { TextControl } from '@wordpress/components';

import {
	useBlockProps,
	InspectorControls,
    ColorPalette,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<InspectorControls key="setting">
				<div id="gfib-fund-prog-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Donations', 'gfib-fund-prog' ) }
						</legend>
						<TextControl
							value={ attributes.donations }
							onChange={ ( value ) => setAttributes( { donations: parseInt( value ) } ) }
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Bar color', 'gfib-fund-prog' ) }
						</legend>
						<ColorPalette
							value={ attributes.barColor }
							onChange={ ( hexColor ) => setAttributes( { barColor: hexColor } ) }
						/>
					</fieldset>
				</div>
			</InspectorControls>
			<TextControl
                label='Donations'
                value={ attributes.donations }
                onChange={ ( value ) => setAttributes( { donations: parseInt( value ) } ) }
            />
		</div>
	);
}
