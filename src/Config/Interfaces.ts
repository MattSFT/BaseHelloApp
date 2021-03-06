// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
export enum StorageType {
  Memory = 0,
  File = 1
}

export interface IConfig {
  readonly Name: string;
  readonly Version: string;
  readonly ApplicationInsightsKey?: string;
  readonly MicrosoftAppId: string;
  readonly MicrosoftAppPassword: string;
  readonly MicrosoftTenantFilter: string[];
  readonly ServerPort: string;
  readonly MessagesEndpoint: string;
  readonly DefaultLocale: string;
  readonly LocalePath: string;
  readonly DataStorageType: StorageType;
  readonly DataFilePath: string;
  readonly LogLevel: number | string;
}
