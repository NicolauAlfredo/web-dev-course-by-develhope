type Point = {
  x: number;
  y: number;
  z: number;
};

type PartialPont = Partial<Point>; // Partial: Make all properties in T optional

type RequiredPoint = Required<PartialPont>; // Require: Make all properties in T required

type ReadonlyPoint = Readonly<RequiredPoint>; // Readonly: Make all properties in T readonly

type Point2D = Omit<Point, "z">; // Omit: Construct a type with the properties of T except for those in type K.

type OnlyZ = Omit<Point, "x" | "y">;

type Point3D = Pick<Point, "x" | "y">; // Pick: From T, pick a set of properties whose keys are in the union K

// Record: Construct a type with a set of properties K of type T

type Texture = {
  blob: Blob;
};

type Cache<T> = Record<string, T>;

const textureCache: Cache<Texture> = {
  texture1: { blob: new Blob() },
  texture2: { blob: new Blob() },
};
