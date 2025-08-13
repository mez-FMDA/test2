# Flexible Asset

A Flexible Asset is defined as

## Business Identifiers

Flexible Asset are identified by a


## Fields

| Name                                                                                                               | Description                                                                                                                                                                                     | Format                                                                                                                                                                                                          | Reference                                           |
|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| <a name="field-id" href="#field-id">id</a>                                                                         | Unique surrogate key.                                                                                                                                                                           | bigint<br/>Read only                                                                                                                                                                                            |                                                     |
                                                                                                                                         | bigint<br/>Read only                                                                                                                                                                                            |                                                     |

## Validation Rules

| Validation rule key | Validation rule                                                                                                                     | Status |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------|
| CU-VAL001           | If both `minimum_duration` and `maximum_duration` are specified, then the minimum duration must be lower than the maximum duration. | DONE   |
