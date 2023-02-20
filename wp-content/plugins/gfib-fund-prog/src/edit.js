/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { TextControl, PanelBody, PanelRow, ColorPicker, } from '@wordpress/components';

import {
	useBlockProps,
	InspectorControls,
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
							{ __( 'Progress', 'gfib-fund-prog' ) }
						</legend>
						<TextControl
							value={ attributes.progress }
							onChange={ ( value ) => setAttributes( { progress: value } ) }
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Goal', 'gfib-fund-prog' ) }
						</legend>
						<TextControl
							value={ attributes.goal }
							onChange={ ( value ) => setAttributes( { goal: value } ) }
						/>
					</fieldset>
				</div>
				<PanelBody
						title="Color Settings"
						initialOpen={false}
					>
						<PanelRow>
							<fieldset>
								<legend className="blocks-base-control__label">
									{ __( 'Bar color', 'gfib-fund-prog' ) }
								</legend>
								<ColorPicker
									color={ attributes.barColor }
									onChangeComplete={ ( value ) => setAttributes( { barColor: value.hex } ) }
									disableAlpha
								/>
							</fieldset>
						</PanelRow>
				</PanelBody>
			</InspectorControls>
			<TextControl
                label='Donations'
                value={ attributes.donations }
                onChange={ ( value ) => setAttributes( { donations: parseInt( value ) } ) }
            />
		</div>
	);
}
