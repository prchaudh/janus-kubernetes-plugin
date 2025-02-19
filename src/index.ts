import {
	createBackendModule,
	coreServices,
} from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { deployKubernetesAction } from './actions/k8s-apply';
import { readFileAction } from './actions/read-file';

/**
 * @public
 * The Read File Module for the Scaffolder Backend
 */
export const deployKubernetesModule = createBackendModule({
	moduleId: 'kubernetes-deploy',
	pluginId: 'scaffolder',
	register({ registerInit }) {
		registerInit({
			deps: {
				scaffolderActions: scaffolderActionsExtensionPoint,
				config: coreServices.rootConfig,
			},
			async init({ scaffolderActions }) {
				scaffolderActions.addActions(deployKubernetesAction(), readFileAction());
			},
		});
	},
});

export default deployKubernetesModule;
