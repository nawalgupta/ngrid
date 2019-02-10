import { SchemaClass } from '@ngtools/json-schema';
import { NgPackageConfig } from 'ng-packagr/ng-package.schema';

import { EntryPointTaskContext } from 'ng-cli-packagr-tasks';

export function mergeUmdIds(context: EntryPointTaskContext, umdModuleIds: { [ tsPath: string ]: string }): void {
  const { entryPoint } = context.epNode.data;
  const orgUmdModuleIds = entryPoint.umdModuleIds || {};
  const schema: SchemaClass<NgPackageConfig> = (entryPoint as any).$schema;
  schema.$$set('lib.umdModuleIds', { ...orgUmdModuleIds, ...umdModuleIds });
}

export function updatePathsFromCache(taskContext: EntryPointTaskContext, pathMappingsCache: { [ tsPath: string ]: string[] }): void {
  const { entryPoint, tsConfig } = taskContext.epNode.data;

  if (!tsConfig.options.paths) {
    tsConfig.options.paths = {};
  }

  for (const pathKey in pathMappingsCache) { //tslint:disable-line:forin
    const paths = tsConfig.options.paths[pathKey] || (tsConfig.options.paths[pathKey] = []);
    paths.unshift(...pathMappingsCache[pathKey]);
  }

  pathMappingsCache[entryPoint.moduleId] = [ entryPoint.destinationPath ];
  pathMappingsCache[`${entryPoint.moduleId}/*`] = [ `${entryPoint.destinationPath}/*` ];
}