# @pfeifferj/plugin-scaffolder-backend-module-kubernetes-deploy

The kubernetes-deploy module for [@pfeifferj/plugin-scaffolder-backend-module-kubernetes-deploy](https://www.npmjs.com/package/@pfeifferj/plugin-scaffolder-backend-module-kubernetes-deploy).

## quickstart
Install package
```bash
yarn add --cwd packages/backend @devit/plugin-scaffolder-backend-module-kubernetes-deploy
```

Import plugin into `scaffolder.ts`

```typescript
import { CatalogClient } from '@backstage/catalog-client';
import {
  createBuiltinActions,
  createRouter,
} from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import {
  deployKubernetesAction,
  templateAndValidateKubernetesAction,
} from '@devit/plugin-scaffolder-backend-module-kubernetes-deploy'; // here
import { ScmIntegrations } from '@backstage/integration';
import { createConfluenceToMarkdownAction } from '@backstage/plugin-scaffolder-backend-module-confluence-to-markdown';

```

and add actions

```typescript
  const actions = [
    ...builtInActions,
    deployKubernetesAction(), // here
    templateAndValidateKubernetesAction(), // and here
    createConfluenceToMarkdownAction({
      integrations,
      config: env.config,
      reader: env.reader,
    }),
  ];


```

_This plugin was created through the Backstage CLI_


## Export Instructions
### Run the commands in the following order to export the plugin
1. `npm install`
2. `yarn tsc`
3. `yarn build`
4. `yarn export-dynamic`
5. `npm pack --json | jq ".[0].integrity"` to get the packaged version of the plugin and the sha-512 hash for it.