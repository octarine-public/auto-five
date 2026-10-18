// AUTO-GENERATED - do not edit.
type PropertyType = string | bigint | number | boolean | Vector2 | Vector3 | Vector4
/**
 * The type byte octarine-core writes before every networked value. Its numbers are
 * `butterfly::PropertyType`'s; the 8- and 16-bit widths fill the gaps it leaves for them
 */
declare const enum EPropertyType {
	BOOL = 0,
	INT8 = 1,
	INT16 = 2,
	INT32 = 3,
	INT64 = 4,
	UINT8 = 5,
	UINT16 = 6,
	UINT32 = 7,
	UINT64 = 8,
	FLOAT = 9,
	STRING = 10,
	VECTOR2 = 11,
	VECTOR3 = 12,
	VECTOR4 = 13,
	TRANSFORM = 14,
	/**
	 * Not a property type: the protocol tag octarine-core writes in a type's place before a
	 * dynamic array's element count. A wire value, it stays 15 and past every type
	 */
	SERIALIZED_ARRAY_SIZE = 15,
	INVALID = -1
}
