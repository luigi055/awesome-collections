# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.1.0-alpha.2](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.1.0-alpha.1...awesome-collections-linked-list@0.1.0-alpha.2) (2022-11-05)

### Features

- traits are now general purpose and accessible privately by all packages ([1612a45](https://github.com/luigi055/awesome-collections/commit/1612a456f249514bf8bc3e0877664a7b841a6704))

# [0.1.0-alpha.1](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.1.0-alpha.0...awesome-collections-linked-list@0.1.0-alpha.1) (2022-11-05)

**Note:** Version bump only for package awesome-collections-linked-list

# [0.1.0-alpha.0](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.4-alpha.5...awesome-collections-linked-list@0.1.0-alpha.0) (2022-11-05)

### Bug Fixes

- **linked-list:** fixes inconsistencies in the push and unshift methods ([b50a4ff](https://github.com/luigi055/awesome-collections/commit/b50a4ff26dd7ef55efde9a26358fbef2353baa59))
- **linked-list:** fixes types in the traits implementations ([5ccc2e2](https://github.com/luigi055/awesome-collections/commit/5ccc2e26d7d1ba4bc086adb5e56d9342070b69f6))

### Features

- **linked-list:** implements the fill method defined by the fillable trait ([88f8d18](https://github.com/luigi055/awesome-collections/commit/88f8d180200c7db081fddd00c43d3c7f36b1a25a))
- **linked-list:** implements the flat method defined by the flatten trait ([ab5bbaa](https://github.com/luigi055/awesome-collections/commit/ab5bbaabdb4b7eccaf7a705565debda760620277))
- **linked-list:** implements the flatMap method defined by the flatten trait ([cc4a353](https://github.com/luigi055/awesome-collections/commit/cc4a3536d677e419084b78e2996329554801e5c6))

## [0.0.4-alpha.5](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.4-alpha.4...awesome-collections-linked-list@0.0.4-alpha.5) (2022-11-01)

### Features

- **linked-list:** implements the concat method defined by the concatenate trait ([c05933b](https://github.com/luigi055/awesome-collections/commit/c05933bae35b93d240ce0777e9194515089244f4))
- **linked-list:** implements the reverse method defined by the reversible trait ([a5b3cf9](https://github.com/luigi055/awesome-collections/commit/a5b3cf90d27c1d1a00fb46954f2e88618da99ed4))
- **linked-list:** implements the splice method defined by the sliceable trait ([4769707](https://github.com/luigi055/awesome-collections/commit/47697071fdab61807a06d8868e83d90e0910786d))

## [0.0.4-alpha.4](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.4-alpha.3...awesome-collections-linked-list@0.0.4-alpha.4) (2022-11-01)

### Features

- **linked-list:** implements the join and toString method defined by the Format trait ([c69e0de](https://github.com/luigi055/awesome-collections/commit/c69e0de3fedd01fa10c5f6c68210411a98c5c74c))

## [0.0.4-alpha.3](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.4-alpha.2...awesome-collections-linked-list@0.0.4-alpha.3) (2022-11-01)

### Features

- **linked-list:** add reverse linked list but not implemented in the linked list main ds ([08c1dd9](https://github.com/luigi055/awesome-collections/commit/08c1dd9727dd04e489064bbea7455651717bb190))
- **linked-list:** implements the reduce method defined by the Reducible trait ([895c5fb](https://github.com/luigi055/awesome-collections/commit/895c5fb89df09af53b9f6c0b07448e38c7daa1af))
- **linked-list:** implements the reduceRight method defined by the Reducible trait ([6acf5c2](https://github.com/luigi055/awesome-collections/commit/6acf5c25056a3f433919ac772f3f602e9fd44e85))
- **linked-list:** implements the sort method defined by the sortable trait ([4e03d36](https://github.com/luigi055/awesome-collections/commit/4e03d3612ac9530d9db52e76d26f5aa935e8ac24))

## [0.0.4-alpha.2](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.4-alpha.1...awesome-collections-linked-list@0.0.4-alpha.2) (2022-10-29)

### Features

- **linked-list:** implements the filter method defined by the Filterable trait ([b725035](https://github.com/luigi055/awesome-collections/commit/b725035c08cd93cccef409e4d63c00fee1b29aac))
- **linked-list:** implements the forEach method defined by the ForEach trait ([bffe784](https://github.com/luigi055/awesome-collections/commit/bffe784f19382b8dc39a6d527d4924c6e73561bf))
- **linked-list:** implements the map method defined by the functor trait ([a9bad7f](https://github.com/luigi055/awesome-collections/commit/a9bad7ffa2cca641c5a959d433d93f7ffc262d15))

## [0.0.4-alpha.1](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.4-alpha.0...awesome-collections-linked-list@0.0.4-alpha.1) (2022-10-28)

### Bug Fixes

- **linked-list:** solves a infinity loop bug when the get method receives a non-number index ([445349c](https://github.com/luigi055/awesome-collections/commit/445349c5a9c4b59737e28b0cfbc1ad8fe47839bd))

## [0.0.4-alpha.0](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.3...awesome-collections-linked-list@0.0.4-alpha.0) (2022-10-28)

### Bug Fixes

- **linked-list:** rename internal implementation of indexof -> indexOf ([73ef657](https://github.com/luigi055/awesome-collections/commit/73ef657276db59bcad789ba1baba0d99813f5446))

### Features

- **linked-list:** implements the at method ([854bf14](https://github.com/luigi055/awesome-collections/commit/854bf140a05a246ec682b04742d5dd05a82854d3))
- **linked-list:** implements the every method defined by the searchable trait ([52bc299](https://github.com/luigi055/awesome-collections/commit/52bc2996984c5c706dd5c7d4257da9a41032c11e))
- **linked-list:** implements the find method defined by the searchable trait ([2df010d](https://github.com/luigi055/awesome-collections/commit/2df010d631de0094dc711f25a7b24e18cd478445))
- **linked-list:** implements the findIndex method defined by the searchable trait ([9caf45c](https://github.com/luigi055/awesome-collections/commit/9caf45cd87c64cc2d9b81f0257b173194449318b))
- **linked-list:** implements the includes method defined by the searchable trait ([5fa7b2b](https://github.com/luigi055/awesome-collections/commit/5fa7b2b4ed58c2c27d6853e15ed2dc4725fb9b64))
- **linked-list:** implements the indexof method defined by the searchable trait ([fa47034](https://github.com/luigi055/awesome-collections/commit/fa47034fa433fb0e4b74af94f4c9cccb3d4bb05a))
- **linked-list:** implements the lastIndexOf method defined by the searchable trait ([2121315](https://github.com/luigi055/awesome-collections/commit/21213151c6f62c89c1e836a36327c4075a8a5af1))
- **linked-list:** implements the some method defined by the searchable trait ([371c178](https://github.com/luigi055/awesome-collections/commit/371c178f140d7f85a3dd34a310b8c8eef743aa8a))

## [0.0.3](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.2...awesome-collections-linked-list@0.0.3) (2022-10-26)

### Bug Fixes

- **linked-list:** fix infinity loop when calling the get method without arguments ([8731a2c](https://github.com/luigi055/awesome-collections/commit/8731a2cc47d193501eba9ac15cc74c598ccc4fed))

## [0.0.2](https://github.com/luigi055/awesome-collections/compare/awesome-collections-linked-list@0.0.2-alpha.0...awesome-collections-linked-list@0.0.2) (2022-10-26)

### Bug Fixes

- **linked-list:** define public package\'s api ([08083bd](https://github.com/luigi055/awesome-collections/commit/08083bde11f70417254fdbf3b9409ab176f3a471))

### Features

- **linked-list:** implement clear method in the linked list ([6213825](https://github.com/luigi055/awesome-collections/commit/62138255a2a906e53d893cbffa7ed6e9d4751f71))
- **linked-list:** implementing the sliceable trait ([d2938b6](https://github.com/luigi055/awesome-collections/commit/d2938b6f4649440631a56ef734b34662840cb775))

## 0.0.2-alpha.0 (2022-10-25)

### Features

- bump up package version ([5be5fa8](https://github.com/luigi055/awesome-collections/commit/5be5fa8be9aa73db43606d2d3f56bf4a6f77cde4))
- **linked-list:** add linked list node which is the core of the data structure ([221ac7a](https://github.com/luigi055/awesome-collections/commit/221ac7aec0a787caa3427dcc8a830277bdcb6e60))
- **linked-list:** add the delete method in the linked list ([20064fc](https://github.com/luigi055/awesome-collections/commit/20064fcc69ee0b8ccf0094653d42ea41368b7b51))
- **linked-list:** add the get method in the linked list ([22dd886](https://github.com/luigi055/awesome-collections/commit/22dd886cdf2a4acce9e4f211660ae4a451098bcb))
- **linked-list:** add the insert method in the linked list ([d8dc830](https://github.com/luigi055/awesome-collections/commit/d8dc8301f7da87075e0728a3b55d3e8020ffbc5a))
- **linked-list:** add the set method in the linked list ([3129603](https://github.com/luigi055/awesome-collections/commit/31296030b3ce5bdcef10f0d313810ade9df6d6fd))
- **linked-list:** implement the IterableLinkedList interface ([b3b3074](https://github.com/luigi055/awesome-collections/commit/b3b3074411db82ec6ed133f496331592ae6928ca))
- **linked-list:** implementing basic linked list trait ([54e36de](https://github.com/luigi055/awesome-collections/commit/54e36dee80885589ce8be855b3f1569154a1513b))
- **linked-list:** initial package setup ([92e0b5a](https://github.com/luigi055/awesome-collections/commit/92e0b5abd61d01521837ebeb2b5a246bca8e44e0))

## 0.0.1-alpha.0 (2022-10-24)

### Features

- **linked-list:** add linked list node which is the core of the data structure ([221ac7a](https://github.com/luigi055/awesome-collections/commit/221ac7aec0a787caa3427dcc8a830277bdcb6e60))
- **linked-list:** add the delete method in the linked list ([20064fc](https://github.com/luigi055/awesome-collections/commit/20064fcc69ee0b8ccf0094653d42ea41368b7b51))
- **linked-list:** add the get method in the linked list ([22dd886](https://github.com/luigi055/awesome-collections/commit/22dd886cdf2a4acce9e4f211660ae4a451098bcb))
- **linked-list:** add the insert method in the linked list ([d8dc830](https://github.com/luigi055/awesome-collections/commit/d8dc8301f7da87075e0728a3b55d3e8020ffbc5a))
- **linked-list:** add the set method in the linked list ([3129603](https://github.com/luigi055/awesome-collections/commit/31296030b3ce5bdcef10f0d313810ade9df6d6fd))
- **linked-list:** implement the IterableLinkedList interface ([b3b3074](https://github.com/luigi055/awesome-collections/commit/b3b3074411db82ec6ed133f496331592ae6928ca))
- **linked-list:** implementing basic linked list trait ([54e36de](https://github.com/luigi055/awesome-collections/commit/54e36dee80885589ce8be855b3f1569154a1513b))
- **linked-list:** initial package setup ([92e0b5a](https://github.com/luigi055/awesome-collections/commit/92e0b5abd61d01521837ebeb2b5a246bca8e44e0))
