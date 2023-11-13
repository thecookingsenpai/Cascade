# Cascade Hashing Algorithm

## Overview

Cascade is an innovative hashing algorithm that offers a unique blend of security and efficiency. It's designed for enhanced protection against common cryptographic attacks and features a flexible approach with iterative transformations, dynamic salting, and optional seed integration. Perfect for applications requiring robust hashing capabilities.

## Features

- **Dynamic Salting**: Enhances security against precomputed hash attacks.
- **Optional Seed Integration**: Adds an extra layer of customization and security.
- **Iterative Process**: Ensures a high degree of input sensitivity and diffusion.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system. Cascade is implemented in TypeScript, so make sure you have TypeScript set up in your development environment.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/thecookingsenpai/Cascade
cd Cascade
```

Install the necessary dependencies (there should be none anyway):

```typescript
bun install
```

Or

```typescript
npm install
```

Or

```typescript
yarn install
```

### Usage

You can test Cascade by doing:

```typescript
bun src/index.ts
```

Or

```typescript
tsx src/index.ts
```

Or

```typescript
yarn src/index.ts
```

To use Cascade in your project, import the `Cascade` class from the `cascade.ts` file and create an instance:

```typescript
import Cascade from './cascade';

const hasher = new Cascade();
const result = hasher.hash("YourInputString");
console.log("Hash:", result.hash);
console.log("Salt:", result.salt);
```

You can also specify custom parameters like prime number, salt size, number of iterations, and seed:

```typescript
const hasher = new Cascade(37, 20, 5, "optional_seed");
const result = hasher.hash("YourInputString", "optional_salt");
```

## License

This project is licensed under the MIT License.
